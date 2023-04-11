import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetFileUploadURLXAmzTargetEnum {
    MTurkRequesterServiceV20170117GetFileUploadURL = "MTurkRequesterServiceV20170117.GetFileUploadURL"
}
export declare class GetFileUploadURLRequest extends SpeakeasyBase {
    getFileUploadURLRequest: shared.GetFileUploadURLRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetFileUploadURLXAmzTargetEnum;
}
export declare class GetFileUploadURLResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getFileUploadURLResponse?: shared.GetFileUploadURLResponse;
    /**
     * RequestError
     */
    requestError?: any;
    /**
     * ServiceFault
     */
    serviceFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
