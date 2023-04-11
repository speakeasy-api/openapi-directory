import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAvailabilityConfigurationsXAmzTargetEnum {
    WorkMailServiceListAvailabilityConfigurations = "WorkMailService.ListAvailabilityConfigurations"
}
export declare class ListAvailabilityConfigurationsRequest extends SpeakeasyBase {
    listAvailabilityConfigurationsRequest: shared.ListAvailabilityConfigurationsRequest;
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
    xAmzTarget: ListAvailabilityConfigurationsXAmzTargetEnum;
}
export declare class ListAvailabilityConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listAvailabilityConfigurationsResponse?: shared.ListAvailabilityConfigurationsResponse;
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
