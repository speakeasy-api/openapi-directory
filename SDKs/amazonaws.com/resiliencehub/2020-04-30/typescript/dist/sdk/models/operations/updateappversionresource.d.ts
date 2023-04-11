import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Defines a logical resource identifier.
 */
export declare class UpdateAppVersionResourceRequestBodyLogicalResourceId extends SpeakeasyBase {
    eksSourceName?: string;
    identifier?: string;
    logicalStackName?: string;
    resourceGroupName?: string;
    terraformSourceName?: string;
}
export declare class UpdateAppVersionResourceRequestBody extends SpeakeasyBase {
    /**
     * Currently, there is no supported additional information for resources.
     */
    additionalInfo?: Record<string, string[]>;
    /**
     * The Amazon Resource Name (ARN) of the AWS Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
     */
    appArn: string;
    /**
     * The list of Application Components that this resource belongs to. If an Application Component is not part of the AWS Resilience Hub application, it will be added.
     */
    appComponents?: string[];
    /**
     * The Amazon Web Services account that owns the physical resource.
     */
    awsAccountId?: string;
    /**
     * The Amazon Web Services region that owns the physical resource.
     */
    awsRegion?: string;
    /**
     * <p>Indicates if a resource is excluded from an Resilience Hub application.</p> <note> <p>You can exclude only imported resources from an Resilience Hub application.</p> </note>
     */
    excluded?: boolean;
    /**
     * Defines a logical resource identifier.
     */
    logicalResourceId?: UpdateAppVersionResourceRequestBodyLogicalResourceId;
    /**
     * The physical identifier of the resource.
     */
    physicalResourceId?: string;
    /**
     * The name of the resource.
     */
    resourceName?: string;
    /**
     * The type of resource.
     */
    resourceType?: string;
}
export declare class UpdateAppVersionResourceRequest extends SpeakeasyBase {
    requestBody: UpdateAppVersionResourceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateAppVersionResourceResponse extends SpeakeasyBase {
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateAppVersionResourceResponse?: shared.UpdateAppVersionResourceResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
