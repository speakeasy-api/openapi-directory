import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AssociateResourceRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the canary that you want to associate with the specified group.
     */
    resourceArn: string;
}
export declare class AssociateResourceRequest extends SpeakeasyBase {
    requestBody: AssociateResourceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Specifies the group. You can specify the group name, the ARN, or the group ID as the <code>GroupIdentifier</code>.
     */
    groupIdentifier: string;
}
export declare class AssociateResourceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateResourceResponse?: Record<string, any>;
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
     * ValidationException
     */
    validationException?: any;
}
