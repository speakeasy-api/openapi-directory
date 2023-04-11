import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CloneStackXAmzTargetEnum {
    OpsWorks20130218CloneStack = "OpsWorks_20130218.CloneStack"
}
export declare class CloneStackRequest extends SpeakeasyBase {
    cloneStackRequest: shared.CloneStackRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CloneStackXAmzTargetEnum;
}
export declare class CloneStackResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cloneStackResult?: shared.CloneStackResult;
    contentType: string;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
