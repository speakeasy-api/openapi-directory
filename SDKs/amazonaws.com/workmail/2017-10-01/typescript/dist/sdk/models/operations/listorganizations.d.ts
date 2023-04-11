import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListOrganizationsXAmzTargetEnum {
    WorkMailServiceListOrganizations = "WorkMailService.ListOrganizations"
}
export declare class ListOrganizationsRequest extends SpeakeasyBase {
    listOrganizationsRequest: shared.ListOrganizationsRequest;
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
    xAmzTarget: ListOrganizationsXAmzTargetEnum;
}
export declare class ListOrganizationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    listOrganizationsResponse?: shared.ListOrganizationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
