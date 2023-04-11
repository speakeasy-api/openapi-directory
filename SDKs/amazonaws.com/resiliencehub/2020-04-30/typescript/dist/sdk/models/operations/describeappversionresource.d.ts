import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Defines a logical resource identifier.
 */
export declare class DescribeAppVersionResourceRequestBodyLogicalResourceId extends SpeakeasyBase {
    eksSourceName?: string;
    identifier?: string;
    logicalStackName?: string;
    resourceGroupName?: string;
    terraformSourceName?: string;
}
export declare class DescribeAppVersionResourceRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the AWS Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
     */
    appArn: string;
    /**
     * The AWS Resilience Hub application version.
     */
    appVersion: string;
    /**
     * The Amazon Web Services account that owns the physical resource.
     */
    awsAccountId?: string;
    /**
     * The Amazon Web Services region that owns the physical resource.
     */
    awsRegion?: string;
    /**
     * Defines a logical resource identifier.
     */
    logicalResourceId?: DescribeAppVersionResourceRequestBodyLogicalResourceId;
    /**
     * The physical identifier of the resource.
     */
    physicalResourceId?: string;
    /**
     * The name of the resource.
     */
    resourceName?: string;
}
export declare class DescribeAppVersionResourceRequest extends SpeakeasyBase {
    requestBody: DescribeAppVersionResourceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAppVersionResourceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    describeAppVersionResourceResponse?: shared.DescribeAppVersionResourceResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
