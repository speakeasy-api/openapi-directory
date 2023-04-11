import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RevokeIpRulesXAmzTargetEnum {
    WorkspacesServiceRevokeIpRules = "WorkspacesService.RevokeIpRules"
}
export declare class RevokeIpRulesRequest extends SpeakeasyBase {
    revokeIpRulesRequest: shared.RevokeIpRulesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RevokeIpRulesXAmzTargetEnum;
}
export declare class RevokeIpRulesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    revokeIpRulesResult?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
