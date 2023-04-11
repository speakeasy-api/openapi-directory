import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteLinkRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the link to delete.
     */
    identifier: string;
}
export declare class DeleteLinkRequest extends SpeakeasyBase {
    requestBody: DeleteLinkRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteLinkResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteLinkOutput?: Record<string, any>;
    /**
     * InternalServiceFault
     */
    internalServiceFault?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * MissingRequiredParameterException
     */
    missingRequiredParameterException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
