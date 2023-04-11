import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The locale to use for localizing the findings.
 */
export declare enum ValidatePolicyRequestBodyLocaleEnum {
    De = "DE",
    En = "EN",
    Es = "ES",
    Fr = "FR",
    It = "IT",
    Ja = "JA",
    Ko = "KO",
    PtBr = "PT_BR",
    ZhCn = "ZH_CN",
    ZhTw = "ZH_TW"
}
/**
 * <p>The type of policy to validate. Identity policies grant permissions to IAM principals. Identity policies include managed and inline policies for IAM roles, users, and groups. They also include service-control policies (SCPs) that are attached to an Amazon Web Services organization, organizational unit (OU), or an account.</p> <p>Resource policies grant permissions on Amazon Web Services resources. Resource policies include trust policies for IAM roles and bucket policies for Amazon S3 buckets. You can provide a generic input such as identity policy or resource policy or a specific input such as managed policy or Amazon S3 bucket policy. </p>
 */
export declare enum ValidatePolicyRequestBodyPolicyTypeEnum {
    IdentityPolicy = "IDENTITY_POLICY",
    ResourcePolicy = "RESOURCE_POLICY",
    ServiceControlPolicy = "SERVICE_CONTROL_POLICY"
}
/**
 * <p>The type of resource to attach to your resource policy. Specify a value for the policy validation resource type only if the policy type is <code>RESOURCE_POLICY</code>. For example, to validate a resource policy to attach to an Amazon S3 bucket, you can choose <code>AWS::S3::Bucket</code> for the policy validation resource type.</p> <p>For resource types not supported as valid values, IAM Access Analyzer runs policy checks that apply to all resource policies. For example, to validate a resource policy to attach to a KMS key, do not specify a value for the policy validation resource type and IAM Access Analyzer will run policy checks that apply to all resource policies.</p>
 */
export declare enum ValidatePolicyRequestBodyValidatePolicyResourceTypeEnum {
    AWSS3Bucket = "AWS::S3::Bucket",
    AWSS3AccessPoint = "AWS::S3::AccessPoint",
    AWSS3MultiRegionAccessPoint = "AWS::S3::MultiRegionAccessPoint",
    AWSS3ObjectLambdaAccessPoint = "AWS::S3ObjectLambda::AccessPoint",
    AWSIAMAssumeRolePolicyDocument = "AWS::IAM::AssumeRolePolicyDocument"
}
export declare class ValidatePolicyRequestBody extends SpeakeasyBase {
    /**
     * The locale to use for localizing the findings.
     */
    locale?: ValidatePolicyRequestBodyLocaleEnum;
    /**
     * The JSON policy document to use as the content for the policy.
     */
    policyDocument: string;
    /**
     * <p>The type of policy to validate. Identity policies grant permissions to IAM principals. Identity policies include managed and inline policies for IAM roles, users, and groups. They also include service-control policies (SCPs) that are attached to an Amazon Web Services organization, organizational unit (OU), or an account.</p> <p>Resource policies grant permissions on Amazon Web Services resources. Resource policies include trust policies for IAM roles and bucket policies for Amazon S3 buckets. You can provide a generic input such as identity policy or resource policy or a specific input such as managed policy or Amazon S3 bucket policy. </p>
     */
    policyType: ValidatePolicyRequestBodyPolicyTypeEnum;
    /**
     * <p>The type of resource to attach to your resource policy. Specify a value for the policy validation resource type only if the policy type is <code>RESOURCE_POLICY</code>. For example, to validate a resource policy to attach to an Amazon S3 bucket, you can choose <code>AWS::S3::Bucket</code> for the policy validation resource type.</p> <p>For resource types not supported as valid values, IAM Access Analyzer runs policy checks that apply to all resource policies. For example, to validate a resource policy to attach to a KMS key, do not specify a value for the policy validation resource type and IAM Access Analyzer will run policy checks that apply to all resource policies.</p>
     */
    validatePolicyResourceType?: ValidatePolicyRequestBodyValidatePolicyResourceTypeEnum;
}
export declare class ValidatePolicyRequest extends SpeakeasyBase {
    requestBody: ValidatePolicyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: number;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: string;
}
export declare class ValidatePolicyResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    validatePolicyResponse?: shared.ValidatePolicyResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
