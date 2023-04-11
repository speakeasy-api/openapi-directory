import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of resource.
 */
export declare enum ListAnalyzedResourcesRequestBodyResourceTypeEnum {
    AWSS3Bucket = "AWS::S3::Bucket",
    AWSIAMRole = "AWS::IAM::Role",
    AWSSQSQueue = "AWS::SQS::Queue",
    AWSLambdaFunction = "AWS::Lambda::Function",
    AWSLambdaLayerVersion = "AWS::Lambda::LayerVersion",
    AWSKMSKey = "AWS::KMS::Key",
    AWSSecretsManagerSecret = "AWS::SecretsManager::Secret",
    AWSEFSFileSystem = "AWS::EFS::FileSystem",
    AWSEc2Snapshot = "AWS::EC2::Snapshot",
    AWSECRRepository = "AWS::ECR::Repository",
    AWSRDSDBSnapshot = "AWS::RDS::DBSnapshot",
    AWSRDSDBClusterSnapshot = "AWS::RDS::DBClusterSnapshot",
    AWSSNSTopic = "AWS::SNS::Topic"
}
export declare class ListAnalyzedResourcesRequestBody extends SpeakeasyBase {
    /**
     * The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to retrieve a list of analyzed resources from.
     */
    analyzerArn: string;
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: number;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: string;
    /**
     * The type of resource.
     */
    resourceType?: ListAnalyzedResourcesRequestBodyResourceTypeEnum;
}
export declare class ListAnalyzedResourcesRequest extends SpeakeasyBase {
    requestBody: ListAnalyzedResourcesRequestBody;
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
export declare class ListAnalyzedResourcesResponse extends SpeakeasyBase {
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
    listAnalyzedResourcesResponse?: shared.ListAnalyzedResourcesResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
