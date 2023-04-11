import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetPatchBaselineForPatchGroupXAmzTargetEnum {
    AmazonSSMGetPatchBaselineForPatchGroup = "AmazonSSM.GetPatchBaselineForPatchGroup"
}
export declare class GetPatchBaselineForPatchGroupRequest extends SpeakeasyBase {
    getPatchBaselineForPatchGroupRequest: shared.GetPatchBaselineForPatchGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPatchBaselineForPatchGroupXAmzTargetEnum;
}
export declare class GetPatchBaselineForPatchGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getPatchBaselineForPatchGroupResult?: shared.GetPatchBaselineForPatchGroupResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
