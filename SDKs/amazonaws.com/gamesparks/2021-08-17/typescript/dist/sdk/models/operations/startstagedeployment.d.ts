import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartStageDeploymentRequestBody extends SpeakeasyBase {
    /**
     *  A client-defined token. With an active client token in the request, this action is idempotent.
     */
    clientToken?: string;
    /**
     * The identifier of the snapshot to deploy.
     */
    snapshotId: string;
}
export declare class StartStageDeploymentRequest extends SpeakeasyBase {
    /**
     * The name of the game.
     */
    gameName: string;
    requestBody: StartStageDeploymentRequestBody;
    /**
     * The name of the stage to deploy the snapshot onto.
     */
    stageName: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartStageDeploymentResponse extends SpeakeasyBase {
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
     * Success
     */
    startStageDeploymentResult?: shared.StartStageDeploymentResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
