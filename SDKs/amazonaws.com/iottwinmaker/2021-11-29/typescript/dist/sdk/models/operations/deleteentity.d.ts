import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteEntityRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the entity to delete.
     */
    entityId: string;
    /**
     * A Boolean value that specifies whether the operation deletes child entities.
     */
    isRecursive?: boolean;
    /**
     * The ID of the workspace that contains the entity to delete.
     */
    workspaceId: string;
}
export declare class DeleteEntityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteEntityResponse?: shared.DeleteEntityResponse;
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
