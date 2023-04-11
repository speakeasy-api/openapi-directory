import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetUploadStatusXAmzTargetEnum {
    IotThingsGraphFrontEndServiceGetUploadStatus = "IotThingsGraphFrontEndService.GetUploadStatus"
}
export declare class GetUploadStatusRequest extends SpeakeasyBase {
    getUploadStatusRequest: shared.GetUploadStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetUploadStatusXAmzTargetEnum;
}
export declare class GetUploadStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getUploadStatusResponse?: shared.GetUploadStatusResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
