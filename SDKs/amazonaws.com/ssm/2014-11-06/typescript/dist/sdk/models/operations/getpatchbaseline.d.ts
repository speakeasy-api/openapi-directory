import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetPatchBaselineXAmzTargetEnum {
    AmazonSSMGetPatchBaseline = "AmazonSSM.GetPatchBaseline"
}
export declare class GetPatchBaselineRequest extends SpeakeasyBase {
    getPatchBaselineRequest: shared.GetPatchBaselineRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPatchBaselineXAmzTargetEnum;
}
export declare class GetPatchBaselineResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DoesNotExistException
     */
    doesNotExistException?: any;
    /**
     * Success
     */
    getPatchBaselineResult?: shared.GetPatchBaselineResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidResourceId
     */
    invalidResourceId?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
