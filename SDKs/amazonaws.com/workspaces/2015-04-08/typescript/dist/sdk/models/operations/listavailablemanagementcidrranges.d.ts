import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAvailableManagementCidrRangesXAmzTargetEnum {
    WorkspacesServiceListAvailableManagementCidrRanges = "WorkspacesService.ListAvailableManagementCidrRanges"
}
export declare class ListAvailableManagementCidrRangesRequest extends SpeakeasyBase {
    listAvailableManagementCidrRangesRequest: shared.ListAvailableManagementCidrRangesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAvailableManagementCidrRangesXAmzTargetEnum;
}
export declare class ListAvailableManagementCidrRangesResponse extends SpeakeasyBase {
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
     * Success
     */
    listAvailableManagementCidrRangesResult?: shared.ListAvailableManagementCidrRangesResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
