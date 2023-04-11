import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDefaultPatchBaselineXAmzTargetEnum {
    AmazonSSMGetDefaultPatchBaseline = "AmazonSSM.GetDefaultPatchBaseline"
}
export declare class GetDefaultPatchBaselineRequest extends SpeakeasyBase {
    getDefaultPatchBaselineRequest: shared.GetDefaultPatchBaselineRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDefaultPatchBaselineXAmzTargetEnum;
}
export declare class GetDefaultPatchBaselineResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDefaultPatchBaselineResult?: shared.GetDefaultPatchBaselineResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
