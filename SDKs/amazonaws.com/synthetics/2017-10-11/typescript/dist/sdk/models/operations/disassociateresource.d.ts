import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DisassociateResourceRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the canary that you want to remove from the specified group.
     */
    resourceArn: string;
}
export declare class DisassociateResourceRequest extends SpeakeasyBase {
    requestBody: DisassociateResourceRequestBody;
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
export declare class DisassociateResourceResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    disassociateResourceResponse?: Record<string, any>;
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
     * ValidationException
     */
    validationException?: any;
}
