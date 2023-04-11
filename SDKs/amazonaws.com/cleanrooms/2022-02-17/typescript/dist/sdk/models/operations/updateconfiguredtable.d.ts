import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateConfiguredTableRequestBody extends SpeakeasyBase {
    /**
     * A new description for the configured table.
     */
    description?: string;
    /**
     * A new name for the configured table.
     */
    name?: string;
}
export declare class UpdateConfiguredTableRequest extends SpeakeasyBase {
    requestBody: UpdateConfiguredTableRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier for the configured table to update. Currently accepts the configured table ID.
     */
    configuredTableIdentifier: string;
}
export declare class UpdateConfiguredTableResponse extends SpeakeasyBase {
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
    updateConfiguredTableOutput?: shared.UpdateConfiguredTableOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
