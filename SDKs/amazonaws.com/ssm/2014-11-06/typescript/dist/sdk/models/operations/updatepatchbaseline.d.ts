import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdatePatchBaselineXAmzTargetEnum {
    AmazonSSMUpdatePatchBaseline = "AmazonSSM.UpdatePatchBaseline"
}
export declare class UpdatePatchBaselineRequest extends SpeakeasyBase {
    updatePatchBaselineRequest: shared.UpdatePatchBaselineRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePatchBaselineXAmzTargetEnum;
}
export declare class UpdatePatchBaselineResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DoesNotExistException
     */
    doesNotExistException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updatePatchBaselineResult?: shared.UpdatePatchBaselineResult;
}
