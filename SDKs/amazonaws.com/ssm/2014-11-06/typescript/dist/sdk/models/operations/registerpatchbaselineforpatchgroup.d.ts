import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterPatchBaselineForPatchGroupXAmzTargetEnum {
    AmazonSSMRegisterPatchBaselineForPatchGroup = "AmazonSSM.RegisterPatchBaselineForPatchGroup"
}
export declare class RegisterPatchBaselineForPatchGroupRequest extends SpeakeasyBase {
    registerPatchBaselineForPatchGroupRequest: shared.RegisterPatchBaselineForPatchGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterPatchBaselineForPatchGroupXAmzTargetEnum;
}
export declare class RegisterPatchBaselineForPatchGroupResponse extends SpeakeasyBase {
    /**
     * AlreadyExistsException
     */
    alreadyExistsException?: any;
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
    registerPatchBaselineForPatchGroupResult?: shared.RegisterPatchBaselineForPatchGroupResult;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
