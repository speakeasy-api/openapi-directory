import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Contains details about an aggregation request.
 */
export declare class ListFindingAggregationsRequestBodyAggregationRequest extends SpeakeasyBase {
    accountAggregation?: shared.AccountAggregation;
    amiAggregation?: shared.AmiAggregation;
    awsEcrContainerAggregation?: shared.AwsEcrContainerAggregation;
    ec2InstanceAggregation?: shared.Ec2InstanceAggregation;
    findingTypeAggregation?: shared.FindingTypeAggregation;
    imageLayerAggregation?: shared.ImageLayerAggregation;
    lambdaFunctionAggregation?: shared.LambdaFunctionAggregation;
    lambdaLayerAggregation?: shared.LambdaLayerAggregation;
    packageAggregation?: shared.PackageAggregation;
    repositoryAggregation?: shared.RepositoryAggregation;
    titleAggregation?: shared.TitleAggregation;
}
/**
 * The type of the aggregation request.
 */
export declare enum ListFindingAggregationsRequestBodyAggregationTypeEnum {
    FindingType = "FINDING_TYPE",
    Package = "PACKAGE",
    Title = "TITLE",
    Repository = "REPOSITORY",
    Ami = "AMI",
    AwsEc2Instance = "AWS_EC2_INSTANCE",
    AwsEcrContainer = "AWS_ECR_CONTAINER",
    ImageLayer = "IMAGE_LAYER",
    Account = "ACCOUNT",
    AwsLambdaFunction = "AWS_LAMBDA_FUNCTION",
    LambdaLayer = "LAMBDA_LAYER"
}
export declare class ListFindingAggregationsRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Web Services account IDs to retrieve finding aggregation data for.
     */
    accountIds?: shared.StringFilter[];
    /**
     * Contains details about an aggregation request.
     */
    aggregationRequest?: ListFindingAggregationsRequestBodyAggregationRequest;
    /**
     * The type of the aggregation request.
     */
    aggregationType: ListFindingAggregationsRequestBodyAggregationTypeEnum;
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: number;
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
     */
    nextToken?: string;
}
export declare class ListFindingAggregationsRequest extends SpeakeasyBase {
    requestBody: ListFindingAggregationsRequestBody;
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
export declare class ListFindingAggregationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listFindingAggregationsResponse?: shared.ListFindingAggregationsResponse;
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
