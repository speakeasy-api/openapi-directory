import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListMobileDeviceAccessOverridesXAmzTargetEnum {
    WorkMailServiceListMobileDeviceAccessOverrides = "WorkMailService.ListMobileDeviceAccessOverrides"
}
export declare class ListMobileDeviceAccessOverridesRequest extends SpeakeasyBase {
    listMobileDeviceAccessOverridesRequest: shared.ListMobileDeviceAccessOverridesRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListMobileDeviceAccessOverridesXAmzTargetEnum;
}
export declare class ListMobileDeviceAccessOverridesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    listMobileDeviceAccessOverridesResponse?: shared.ListMobileDeviceAccessOverridesResponse;
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
