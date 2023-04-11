import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The format that will be used to encode the image.
 */
export declare enum GetImagesRequestBodyFormatEnum {
    Jpeg = "JPEG",
    Png = "PNG"
}
/**
 * The origin of the Server or Producer timestamps to use to generate the images.
 */
export declare enum GetImagesRequestBodyImageSelectorTypeEnum {
    ProducerTimestamp = "PRODUCER_TIMESTAMP",
    ServerTimestamp = "SERVER_TIMESTAMP"
}
export declare class GetImagesRequestBody extends SpeakeasyBase {
    /**
     * The end timestamp for the range of images to be generated.
     */
    endTimestamp: Date;
    /**
     * The format that will be used to encode the image.
     */
    format: GetImagesRequestBodyFormatEnum;
    /**
     * The list of a key-value pair structure that contains extra parameters that can be applied when the image is generated. The <code>FormatConfig</code> key is the <code>JPEGQuality</code>, which indicates the JPEG quality key to be used to generate the image. The <code>FormatConfig</code> value accepts ints from 1 to 100. If the value is 1, the image will be generated with less quality and the best compression. If the value is 100, the image will be generated with the best quality and less compression. If no value is provided, the default value of the <code>JPEGQuality</code> key will be set to 80.
     */
    formatConfig?: Record<string, string>;
    /**
     * The height of the output image that is used in conjunction with the <code>WidthPixels</code> parameter. When both <code>HeightPixels</code> and <code>WidthPixels</code> parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the <code>HeightPixels</code> parameter is provided, its original aspect ratio will be used to calculate the <code>WidthPixels</code> ratio. If neither parameter is provided, the original image size will be returned.
     */
    heightPixels?: number;
    /**
     * The origin of the Server or Producer timestamps to use to generate the images.
     */
    imageSelectorType: GetImagesRequestBodyImageSelectorTypeEnum;
    /**
     * <p>The maximum number of images to be returned by the API. </p> <note> <p>The default limit is 100 images per API response. The additional results will be paginated. </p> </note>
     */
    maxResults?: number;
    /**
     * A token that specifies where to start paginating the next set of Images. This is the <code>GetImages:NextToken</code> from a previously truncated response.
     */
    nextToken?: string;
    /**
     * <p>The time interval in milliseconds (ms) at which the images need to be generated from the stream. The minimum value that can be provided is 3000 ms. If the timestamp range is less than the sampling interval, the Image from the <code>startTimestamp</code> will be returned if available. </p> <note> <p>The minimum value of 3000 ms is a soft limit. If needed, a lower sampling frequency can be requested.</p> </note>
     */
    samplingInterval: number;
    /**
     * The starting point from which the images should be generated. This <code>StartTimestamp</code> must be within an inclusive range of timestamps for an image to be returned.
     */
    startTimestamp: Date;
    /**
     * The Amazon Resource Name (ARN) of the stream from which to retrieve the images. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
     */
    streamARN?: string;
    /**
     * The name of the stream from which to retrieve the images. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
     */
    streamName?: string;
    /**
     * The width of the output image that is used in conjunction with the <code>HeightPixels</code> parameter. When both <code>WidthPixels</code> and <code>HeightPixels</code> parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the <code>WidthPixels</code> parameter is provided or if only the <code>HeightPixels</code> is provided, a <code>ValidationException</code> will be thrown. If neither parameter is provided, the original image size from the stream will be returned.
     */
    widthPixels?: number;
}
export declare class GetImagesRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: GetImagesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetImagesResponse extends SpeakeasyBase {
    /**
     * ClientLimitExceededException
     */
    clientLimitExceededException?: any;
    contentType: string;
    /**
     * Success
     */
    getImagesOutput?: shared.GetImagesOutput;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
