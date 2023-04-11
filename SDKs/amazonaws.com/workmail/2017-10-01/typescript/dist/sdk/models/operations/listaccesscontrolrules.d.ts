import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAccessControlRulesXAmzTargetEnum {
    WorkMailServiceListAccessControlRules = "WorkMailService.ListAccessControlRules"
}
export declare class ListAccessControlRulesRequest extends SpeakeasyBase {
    listAccessControlRulesRequest: shared.ListAccessControlRulesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAccessControlRulesXAmzTargetEnum;
}
export declare class ListAccessControlRulesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listAccessControlRulesResponse?: shared.ListAccessControlRulesResponse;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
