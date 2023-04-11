import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetOrganizationConformancePackDetailedStatusXAmzTargetEnum {
    StarlingDoveServiceGetOrganizationConformancePackDetailedStatus = "StarlingDoveService.GetOrganizationConformancePackDetailedStatus"
}
export declare class GetOrganizationConformancePackDetailedStatusRequest extends SpeakeasyBase {
    getOrganizationConformancePackDetailedStatusRequest: shared.GetOrganizationConformancePackDetailedStatusRequest;
    /**
     * Pagination limit
     */
    limit?: string;
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
    xAmzTarget: GetOrganizationConformancePackDetailedStatusXAmzTargetEnum;
}
export declare class GetOrganizationConformancePackDetailedStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getOrganizationConformancePackDetailedStatusResponse?: shared.GetOrganizationConformancePackDetailedStatusResponse;
    /**
     * InvalidLimitException
     */
    invalidLimitException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * NoSuchOrganizationConformancePackException
     */
    noSuchOrganizationConformancePackException?: any;
    /**
     * OrganizationAccessDeniedException
     */
    organizationAccessDeniedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
