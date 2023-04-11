import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Defines a logical resource identifier.
 */
export declare class DeleteAppVersionResourceRequestBodyLogicalResourceId extends SpeakeasyBase {
    eksSourceName?: string;
    identifier?: string;
    logicalStackName?: string;
    resourceGroupName?: string;
    terraformSourceName?: string;
}
export declare class DeleteAppVersionResourceRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the AWS Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
     */
    appArn: string;
    /**
     * The Amazon Web Services account that owns the physical resource.
     */
    awsAccountId?: string;
    /**
     * The Amazon Web Services region that owns the physical resource.
     */
    awsRegion?: string;
    /**
     * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
     */
    clientToken?: string;
    /**
     * Defines a logical resource identifier.
     */
    logicalResourceId?: DeleteAppVersionResourceRequestBodyLogicalResourceId;
    /**
     * The physical identifier of the resource.
     */
    physicalResourceId?: string;
    /**
     * The name of the resource.
     */
    resourceName?: string;
}
export declare class DeleteAppVersionResourceRequest extends SpeakeasyBase {
    requestBody: DeleteAppVersionResourceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAppVersionResourceResponse extends SpeakeasyBase {
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
    deleteAppVersionResourceResponse?: shared.DeleteAppVersionResourceResponse;
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
