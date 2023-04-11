import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Details on the criteria used to define the filter.
 */
export declare class ListFindingsRequestBodyFilterCriteria extends SpeakeasyBase {
    awsAccountId?: shared.StringFilter[];
    componentId?: shared.StringFilter[];
    componentType?: shared.StringFilter[];
    ec2InstanceImageId?: shared.StringFilter[];
    ec2InstanceSubnetId?: shared.StringFilter[];
    ec2InstanceVpcId?: shared.StringFilter[];
    ecrImageArchitecture?: shared.StringFilter[];
    ecrImageHash?: shared.StringFilter[];
    ecrImagePushedAt?: shared.DateFilter[];
    ecrImageRegistry?: shared.StringFilter[];
    ecrImageRepositoryName?: shared.StringFilter[];
    ecrImageTags?: shared.StringFilter[];
    exploitAvailable?: shared.StringFilter[];
    findingArn?: shared.StringFilter[];
    findingStatus?: shared.StringFilter[];
    findingType?: shared.StringFilter[];
    firstObservedAt?: shared.DateFilter[];
    fixAvailable?: shared.StringFilter[];
    inspectorScore?: shared.NumberFilter[];
    lambdaFunctionExecutionRoleArn?: shared.StringFilter[];
    lambdaFunctionLastModifiedAt?: shared.DateFilter[];
    lambdaFunctionLayers?: shared.StringFilter[];
    lambdaFunctionName?: shared.StringFilter[];
    lambdaFunctionRuntime?: shared.StringFilter[];
    lastObservedAt?: shared.DateFilter[];
    networkProtocol?: shared.StringFilter[];
    portRange?: shared.PortRangeFilter[];
    relatedVulnerabilities?: shared.StringFilter[];
    resourceId?: shared.StringFilter[];
    resourceTags?: shared.MapFilter[];
    resourceType?: shared.StringFilter[];
    severity?: shared.StringFilter[];
    title?: shared.StringFilter[];
    updatedAt?: shared.DateFilter[];
    vendorSeverity?: shared.StringFilter[];
    vulnerabilityId?: shared.StringFilter[];
    vulnerabilitySource?: shared.StringFilter[];
    vulnerablePackages?: shared.PackageFilter[];
}
/**
 * Details about the criteria used to sort finding results.
 */
export declare class ListFindingsRequestBodySortCriteria extends SpeakeasyBase {
    field?: shared.SortFieldEnum;
    sortOrder?: shared.SortOrderEnum;
}
export declare class ListFindingsRequestBody extends SpeakeasyBase {
    /**
     * Details on the criteria used to define the filter.
     */
    filterCriteria?: ListFindingsRequestBodyFilterCriteria;
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: number;
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
     */
    nextToken?: string;
    /**
     * Details about the criteria used to sort finding results.
     */
    sortCriteria?: ListFindingsRequestBodySortCriteria;
}
export declare class ListFindingsRequest extends SpeakeasyBase {
    requestBody: ListFindingsRequestBody;
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
export declare class ListFindingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listFindingsResponse?: shared.ListFindingsResponse;
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
