import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateConfiguredTableAssociationRequestBody extends SpeakeasyBase {
    /**
     * A new description for the configured table association.
     */
    description?: string;
    /**
     * The service will assume this role to access catalog metadata and query the table.
     */
    roleArn?: string;
}
export declare class UpdateConfiguredTableAssociationRequest extends SpeakeasyBase {
    requestBody: UpdateConfiguredTableAssociationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier for the configured table association to update. Currently accepts the configured table association ID.
     */
    configuredTableAssociationIdentifier: string;
    /**
     * The unique ID for the membership that the configured table association belongs to.
     */
    membershipIdentifier: string;
}
export declare class UpdateConfiguredTableAssociationResponse extends SpeakeasyBase {
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
    updateConfiguredTableAssociationOutput?: shared.UpdateConfiguredTableAssociationOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
