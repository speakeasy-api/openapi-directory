import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListApplicationsXAmzTargetEnum {
    Ec2WindowsBarleyServiceListApplications = "EC2WindowsBarleyService.ListApplications"
}
export declare class ListApplicationsRequest extends SpeakeasyBase {
    listApplicationsRequest: shared.ListApplicationsRequest;
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
    xAmzTarget: ListApplicationsXAmzTargetEnum;
}
export declare class ListApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listApplicationsResponse?: shared.ListApplicationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
