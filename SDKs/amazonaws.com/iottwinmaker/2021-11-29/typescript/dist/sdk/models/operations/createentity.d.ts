import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateEntityRequestBody extends SpeakeasyBase {
    /**
     * An object that maps strings to the components in the entity. Each string in the mapping must be unique to this object.
     */
    components?: Record<string, shared.ComponentRequest>;
    /**
     * The description of the entity.
     */
    description?: string;
    /**
     * The ID of the entity.
     */
    entityId?: string;
    /**
     * The name of the entity.
     */
    entityName: string;
    /**
     * The ID of the entity's parent entity.
     */
    parentEntityId?: string;
    /**
     * Metadata that you can use to manage the entity.
     */
    tags?: Record<string, string>;
}
export declare class CreateEntityRequest extends SpeakeasyBase {
    requestBody: CreateEntityRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the workspace that contains the entity.
     */
    workspaceId: string;
}
export declare class CreateEntityResponse extends SpeakeasyBase {
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
    createEntityResponse?: shared.CreateEntityResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
