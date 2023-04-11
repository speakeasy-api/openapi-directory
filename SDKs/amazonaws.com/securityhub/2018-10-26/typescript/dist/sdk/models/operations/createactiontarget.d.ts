import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateActionTargetRequestBody extends SpeakeasyBase {
    /**
     * The description for the custom action target.
     */
    description: string;
    /**
     * The ID for the custom action target. Can contain up to 20 alphanumeric characters.
     */
    id: string;
    /**
     * The name of the custom action target. Can contain up to 20 characters.
     */
    name: string;
}
export declare class CreateActionTargetRequest extends SpeakeasyBase {
    requestBody: CreateActionTargetRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateActionTargetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createActionTargetResponse?: shared.CreateActionTargetResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidAccessException
     */
    invalidAccessException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceConflictException
     */
    resourceConflictException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
