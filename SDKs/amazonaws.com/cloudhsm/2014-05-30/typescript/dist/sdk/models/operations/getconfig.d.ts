import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetConfigXAmzTargetEnum {
    CloudHsmFrontendServiceGetConfig = "CloudHsmFrontendService.GetConfig"
}
export declare class GetConfigRequest extends SpeakeasyBase {
    getConfigRequest: shared.GetConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetConfigXAmzTargetEnum;
}
export declare class GetConfigResponse extends SpeakeasyBase {
    /**
     * CloudHsmInternalException
     */
    cloudHsmInternalException?: any;
    /**
     * CloudHsmServiceException
     */
    cloudHsmServiceException?: any;
    contentType: string;
    /**
     * Success
     */
    getConfigResponse?: shared.GetConfigResponse;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
