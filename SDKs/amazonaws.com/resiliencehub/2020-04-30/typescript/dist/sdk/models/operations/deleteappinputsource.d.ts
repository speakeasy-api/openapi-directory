import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The input source of the namespace that is located on your Amazon Elastic Kubernetes Service cluster.
 */
export declare class DeleteAppInputSourceRequestBodyEksSourceClusterNamespace extends SpeakeasyBase {
    eksClusterArn?: string;
    namespace?: string;
}
/**
 *  The Terraform s3 state file you need to import.
 */
export declare class DeleteAppInputSourceRequestBodyTerraformSource extends SpeakeasyBase {
    s3StateFileUrl?: string;
}
export declare class DeleteAppInputSourceRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the AWS Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
     */
    appArn: string;
    /**
     * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
     */
    clientToken?: string;
    /**
     * The input source of the namespace that is located on your Amazon Elastic Kubernetes Service cluster.
     */
    eksSourceClusterNamespace?: DeleteAppInputSourceRequestBodyEksSourceClusterNamespace;
    /**
     * The Amazon Resource Name (ARN) of the imported resource you want to remove from the Resilience Hub application. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
     */
    sourceArn?: string;
    /**
     *  The Terraform s3 state file you need to import.
     */
    terraformSource?: DeleteAppInputSourceRequestBodyTerraformSource;
}
export declare class DeleteAppInputSourceRequest extends SpeakeasyBase {
    requestBody: DeleteAppInputSourceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAppInputSourceResponse extends SpeakeasyBase {
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
    deleteAppInputSourceResponse?: shared.DeleteAppInputSourceResponse;
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
