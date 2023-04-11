import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetResourceRequestStatusXAmzTargetEnum {
    CloudApiServiceGetResourceRequestStatus = "CloudApiService.GetResourceRequestStatus"
}
export declare class GetResourceRequestStatusRequest extends SpeakeasyBase {
    getResourceRequestStatusInput: shared.GetResourceRequestStatusInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResourceRequestStatusXAmzTargetEnum;
}
export declare class GetResourceRequestStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getResourceRequestStatusOutput?: shared.GetResourceRequestStatusOutput;
    /**
     * RequestTokenNotFoundException
     */
    requestTokenNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
