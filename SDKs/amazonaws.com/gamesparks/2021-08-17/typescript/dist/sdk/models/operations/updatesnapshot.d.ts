import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSnapshotRequestBody extends SpeakeasyBase {
    /**
     * The description of the snapshot.
     */
    description?: string;
}
export declare class UpdateSnapshotRequest extends SpeakeasyBase {
    /**
     * The name of the game.
     */
    gameName: string;
    requestBody: UpdateSnapshotRequestBody;
    /**
     * The identifier of the snapshot.
     */
    snapshotId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateSnapshotResponse extends SpeakeasyBase {
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
    updateSnapshotResult?: shared.UpdateSnapshotResult;
    /**
     * ValidationException
     */
    validationException?: any;
}
