import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePatchBaselineXAmzTargetEnum {
    AmazonSSMCreatePatchBaseline = "AmazonSSM.CreatePatchBaseline"
}
export declare class CreatePatchBaselineRequest extends SpeakeasyBase {
    createPatchBaselineRequest: shared.CreatePatchBaselineRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePatchBaselineXAmzTargetEnum;
}
export declare class CreatePatchBaselineResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createPatchBaselineResult?: shared.CreatePatchBaselineResult;
    /**
     * IdempotentParameterMismatch
     */
    idempotentParameterMismatch?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
}
