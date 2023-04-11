import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeletePatchBaselineXAmzTargetEnum {
    AmazonSSMDeletePatchBaseline = "AmazonSSM.DeletePatchBaseline"
}
export declare class DeletePatchBaselineRequest extends SpeakeasyBase {
    deletePatchBaselineRequest: shared.DeletePatchBaselineRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePatchBaselineXAmzTargetEnum;
}
export declare class DeletePatchBaselineResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deletePatchBaselineResult?: shared.DeletePatchBaselineResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
