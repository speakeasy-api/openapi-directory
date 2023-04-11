import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateAppVersionAppComponentRequestBody extends SpeakeasyBase {
    /**
     * Currently, there is no supported additional information for Application Components.
     */
    additionalInfo?: Record<string, string[]>;
    /**
     * The Amazon Resource Name (ARN) of the AWS Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
     */
    appArn: string;
    /**
     * The identifier of the Application Component.
     */
    id: string;
    /**
     * The name of the Application Component.
     */
    name?: string;
    /**
     * The type of Application Component. For more information about the types of Application Component, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/AppComponent.grouping.html">Grouping resources in an AppComponent</a>.
     */
    type?: string;
}
export declare class UpdateAppVersionAppComponentRequest extends SpeakeasyBase {
    requestBody: UpdateAppVersionAppComponentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateAppVersionAppComponentResponse extends SpeakeasyBase {
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateAppVersionAppComponentResponse?: shared.UpdateAppVersionAppComponentResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
