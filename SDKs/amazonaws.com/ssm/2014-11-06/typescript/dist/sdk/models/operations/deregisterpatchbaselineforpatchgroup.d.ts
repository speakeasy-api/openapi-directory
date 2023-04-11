import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterPatchBaselineForPatchGroupXAmzTargetEnum {
    AmazonSSMDeregisterPatchBaselineForPatchGroup = "AmazonSSM.DeregisterPatchBaselineForPatchGroup"
}
export declare class DeregisterPatchBaselineForPatchGroupRequest extends SpeakeasyBase {
    deregisterPatchBaselineForPatchGroupRequest: shared.DeregisterPatchBaselineForPatchGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterPatchBaselineForPatchGroupXAmzTargetEnum;
}
export declare class DeregisterPatchBaselineForPatchGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deregisterPatchBaselineForPatchGroupResult?: shared.DeregisterPatchBaselineForPatchGroupResult;
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
