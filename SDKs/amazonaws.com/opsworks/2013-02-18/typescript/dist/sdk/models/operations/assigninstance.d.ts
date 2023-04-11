import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssignInstanceXAmzTargetEnum {
    OpsWorks20130218AssignInstance = "OpsWorks_20130218.AssignInstance"
}
export declare class AssignInstanceRequest extends SpeakeasyBase {
    assignInstanceRequest: shared.AssignInstanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssignInstanceXAmzTargetEnum;
}
export declare class AssignInstanceResponse extends SpeakeasyBase {
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
