import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UnassignInstanceXAmzTargetEnum {
    OpsWorks20130218UnassignInstance = "OpsWorks_20130218.UnassignInstance"
}
export declare class UnassignInstanceRequest extends SpeakeasyBase {
    unassignInstanceRequest: shared.UnassignInstanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UnassignInstanceXAmzTargetEnum;
}
export declare class UnassignInstanceResponse extends SpeakeasyBase {
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
