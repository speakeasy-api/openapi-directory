import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateApplicationRequestBody extends SpeakeasyBase {
    /**
     * The new description of the application.
     */
    description?: string;
    /**
     * Deprecated: The new name of the application. The name must be unique in the region in which you are updating the application. Please do not use this field as we have stopped supporting name updates.
     */
    name?: string;
}
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    requestBody: UpdateApplicationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The name, ID, or ARN of the application that will be updated.
     */
    application: string;
}
export declare class UpdateApplicationResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
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
     * Success
     */
    updateApplicationResponse?: shared.UpdateApplicationResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
