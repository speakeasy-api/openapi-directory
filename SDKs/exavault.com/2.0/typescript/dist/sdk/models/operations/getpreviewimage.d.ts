import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The size of the image.
 */
export declare enum GetPreviewImageSizeEnum {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
export declare class GetPreviewImageRequest extends SpeakeasyBase {
    /**
     * Access Token
     */
    evAccessToken: string;
    /**
     * API Key
     */
    evApiKey: string;
    /**
     * Overrides sizes. Sets to a specific height.
     */
    height?: number;
    /**
     * Page number to extract from a multi-page document (0 is the first page). Vaild for **.pdf** or **.doc** files.
     */
    page?: number;
    /**
     * Resource identifier for the image file.
     */
    resource: string;
    /**
     * The size of the image.
     */
    size: GetPreviewImageSizeEnum;
    /**
     * Overrides sizes. Sets to a specific width.
     */
    width?: number;
}
export declare class GetPreviewImageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    previewFileResponse?: shared.PreviewFileResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
