import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteLayerVersionRequest extends SpeakeasyBase {
    /**
     * The name or Amazon Resource Name (ARN) of the layer.
     */
    layerName: string;
    /**
     * The version number.
     */
    versionNumber: number;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteLayerVersionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
