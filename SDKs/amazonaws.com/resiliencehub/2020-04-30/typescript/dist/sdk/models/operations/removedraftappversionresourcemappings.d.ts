import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveDraftAppVersionResourceMappingsRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the AWS Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
     */
    appArn: string;
    /**
     * The names of the registered applications you want to remove from the resource mappings.
     */
    appRegistryAppNames?: string[];
    /**
     * <p>The names of the Amazon Elastic Kubernetes Service clusters and namespaces you want to remove from the resource mappings.</p> <note> <p>This parameter accepts values in "eks-cluster/namespace" format.</p> </note>
     */
    eksSourceNames?: string[];
    /**
     * The names of the CloudFormation stacks you want to remove from the resource mappings.
     */
    logicalStackNames?: string[];
    /**
     * The names of the resource groups you want to remove from the resource mappings.
     */
    resourceGroupNames?: string[];
    /**
     * The names of the resources you want to remove from the resource mappings.
     */
    resourceNames?: string[];
    /**
     * The names of the Terraform sources you want to remove from the resource mappings.
     */
    terraformSourceNames?: string[];
}
export declare class RemoveDraftAppVersionResourceMappingsRequest extends SpeakeasyBase {
    requestBody: RemoveDraftAppVersionResourceMappingsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RemoveDraftAppVersionResourceMappingsResponse extends SpeakeasyBase {
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
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    removeDraftAppVersionResourceMappingsResponse?: shared.RemoveDraftAppVersionResourceMappingsResponse;
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
