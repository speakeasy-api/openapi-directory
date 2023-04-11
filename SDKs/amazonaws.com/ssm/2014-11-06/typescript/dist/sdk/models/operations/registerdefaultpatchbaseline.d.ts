import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterDefaultPatchBaselineXAmzTargetEnum {
    AmazonSSMRegisterDefaultPatchBaseline = "AmazonSSM.RegisterDefaultPatchBaseline"
}
export declare class RegisterDefaultPatchBaselineRequest extends SpeakeasyBase {
    registerDefaultPatchBaselineRequest: shared.RegisterDefaultPatchBaselineRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterDefaultPatchBaselineXAmzTargetEnum;
}
export declare class RegisterDefaultPatchBaselineResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DoesNotExistException
     */
    doesNotExistException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidResourceId
     */
    invalidResourceId?: any;
    /**
     * Success
     */
    registerDefaultPatchBaselineResult?: shared.RegisterDefaultPatchBaselineResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
