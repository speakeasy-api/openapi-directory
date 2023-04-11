import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateStackXAmzTargetEnum {
    OpsWorks20130218UpdateStack = "OpsWorks_20130218.UpdateStack"
}
export declare class UpdateStackRequest extends SpeakeasyBase {
    updateStackRequest: shared.UpdateStackRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateStackXAmzTargetEnum;
}
export declare class UpdateStackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
