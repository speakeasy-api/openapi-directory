import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Properties that specify the code generator for a generated code job.
 */
export declare class StartGeneratedCodeJobRequestBodyGenerator extends SpeakeasyBase {
    gameSDKVersion?: string;
    language?: string;
    targetPlatform?: string;
}
export declare class StartGeneratedCodeJobRequestBody extends SpeakeasyBase {
    /**
     * Properties that specify the code generator for a generated code job.
     */
    generator: StartGeneratedCodeJobRequestBodyGenerator;
}
export declare class StartGeneratedCodeJobRequest extends SpeakeasyBase {
    /**
     * The name of the game.
     */
    gameName: string;
    requestBody: StartGeneratedCodeJobRequestBody;
    /**
     * The identifier of the snapshot for which to generate code.
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
export declare class StartGeneratedCodeJobResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
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
    startGeneratedCodeJobResult?: shared.StartGeneratedCodeJobResult;
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
