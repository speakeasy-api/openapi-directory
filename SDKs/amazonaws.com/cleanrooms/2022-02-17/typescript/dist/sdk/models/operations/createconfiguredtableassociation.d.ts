import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateConfiguredTableAssociationRequestBody extends SpeakeasyBase {
    /**
     * A unique identifier for the configured table to be associated to. Currently accepts a configured table ID.
     */
    configuredTableIdentifier: string;
    /**
     * A description for the configured table association.
     */
    description?: string;
    /**
     * The name of the configured table association. This name is used to query the underlying configured table.
     */
    name: string;
    /**
     * The service will assume this role to access catalog metadata and query the table.
     */
    roleArn: string;
    /**
     * Map of tags assigned to a resource
     */
    tags?: Record<string, string>;
}
export declare class CreateConfiguredTableAssociationRequest extends SpeakeasyBase {
    requestBody: CreateConfiguredTableAssociationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A unique identifier for one of your memberships for a collaboration. The configured table is associated to the collaboration that this membership belongs to. Currently accepts a membership ID.
     */
    membershipIdentifier: string;
}
export declare class CreateConfiguredTableAssociationResponse extends SpeakeasyBase {
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
     * Success
     */
    createConfiguredTableAssociationOutput?: shared.CreateConfiguredTableAssociationOutput;
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
     * ValidationException
     */
    validationException?: any;
}
