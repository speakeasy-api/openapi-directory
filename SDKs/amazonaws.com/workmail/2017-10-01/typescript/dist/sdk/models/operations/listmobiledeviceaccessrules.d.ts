import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListMobileDeviceAccessRulesXAmzTargetEnum {
    WorkMailServiceListMobileDeviceAccessRules = "WorkMailService.ListMobileDeviceAccessRules"
}
export declare class ListMobileDeviceAccessRulesRequest extends SpeakeasyBase {
    listMobileDeviceAccessRulesRequest: shared.ListMobileDeviceAccessRulesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListMobileDeviceAccessRulesXAmzTargetEnum;
}
export declare class ListMobileDeviceAccessRulesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    listMobileDeviceAccessRulesResponse?: shared.ListMobileDeviceAccessRulesResponse;
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
