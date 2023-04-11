import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AuthorizeIpRulesXAmzTargetEnum {
    WorkspacesServiceAuthorizeIpRules = "WorkspacesService.AuthorizeIpRules"
}
export declare class AuthorizeIpRulesRequest extends SpeakeasyBase {
    authorizeIpRulesRequest: shared.AuthorizeIpRulesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AuthorizeIpRulesXAmzTargetEnum;
}
export declare class AuthorizeIpRulesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    authorizeIpRulesResult?: Record<string, any>;
    contentType: string;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    /**
     * InvalidResourceStateException
     */
    invalidResourceStateException?: any;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
