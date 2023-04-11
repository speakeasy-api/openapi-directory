import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSecurityConfigXAmzTargetEnum {
    OpenSearchServerlessGetSecurityConfig = "OpenSearchServerless.GetSecurityConfig"
}
export declare class GetSecurityConfigRequest extends SpeakeasyBase {
    getSecurityConfigRequest: shared.GetSecurityConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSecurityConfigXAmzTargetEnum;
}
export declare class GetSecurityConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSecurityConfigResponse?: shared.GetSecurityConfigResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
