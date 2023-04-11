import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The service scan type to check permissions for.
 */
export declare enum ListAccountPermissionsRequestBodyServiceEnum {
    Ec2 = "EC2",
    Ecr = "ECR",
    Lambda = "LAMBDA"
}
export declare class ListAccountPermissionsRequestBody extends SpeakeasyBase {
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: number;
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
     */
    nextToken?: string;
    /**
     * The service scan type to check permissions for.
     */
    service?: ListAccountPermissionsRequestBodyServiceEnum;
}
export declare class ListAccountPermissionsRequest extends SpeakeasyBase {
    requestBody: ListAccountPermissionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListAccountPermissionsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listAccountPermissionsResponse?: shared.ListAccountPermissionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
