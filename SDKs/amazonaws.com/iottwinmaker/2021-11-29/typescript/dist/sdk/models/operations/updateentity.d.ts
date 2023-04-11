import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The parent entity update request.
 */
export declare class UpdateEntityRequestBodyParentEntityUpdate extends SpeakeasyBase {
    parentEntityId?: string;
    updateType?: shared.ParentEntityUpdateTypeEnum;
}
export declare class UpdateEntityRequestBody extends SpeakeasyBase {
    /**
     * An object that maps strings to the component updates in the request. Each string in the mapping must be unique to this object.
     */
    componentUpdates?: Record<string, shared.ComponentUpdateRequest>;
    /**
     * The description of the entity.
     */
    description?: string;
    /**
     * The name of the entity.
     */
    entityName?: string;
    /**
     * The parent entity update request.
     */
    parentEntityUpdate?: UpdateEntityRequestBodyParentEntityUpdate;
}
export declare class UpdateEntityRequest extends SpeakeasyBase {
    requestBody: UpdateEntityRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the entity.
     */
    entityId: string;
    /**
     * The ID of the workspace that contains the entity.
     */
    workspaceId: string;
}
export declare class UpdateEntityResponse extends SpeakeasyBase {
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
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateEntityResponse?: shared.UpdateEntityResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
