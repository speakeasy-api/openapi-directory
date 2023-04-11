import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdatePermissionsRequestBody extends SpeakeasyBase {
    /**
     * An array of structures that contain the permission updates to make.
     */
    updateInstructionBatch: shared.UpdateInstruction[];
}
export declare class UpdatePermissionsRequest extends SpeakeasyBase {
    requestBody: UpdatePermissionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the workspace to update.
     */
    workspaceId: string;
}
export declare class UpdatePermissionsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
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
    updatePermissionsResponse?: shared.UpdatePermissionsResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
