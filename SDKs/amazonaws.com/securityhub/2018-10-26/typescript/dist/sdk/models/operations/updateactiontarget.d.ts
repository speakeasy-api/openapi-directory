import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateActionTargetRequestBody extends SpeakeasyBase {
    /**
     * The updated description for the custom action target.
     */
    description?: string;
    /**
     * The updated name of the custom action target.
     */
    name?: string;
}
export declare class UpdateActionTargetRequest extends SpeakeasyBase {
    /**
     * The ARN of the custom action target to update.
     */
    actionTargetArn: string;
    requestBody: UpdateActionTargetRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateActionTargetResponse extends SpeakeasyBase {
    contentType: string;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateActionTargetResponse?: Record<string, any>;
}
