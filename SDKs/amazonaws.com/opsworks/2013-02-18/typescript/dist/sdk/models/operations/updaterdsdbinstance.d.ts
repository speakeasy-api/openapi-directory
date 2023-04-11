import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateRdsDbInstanceXAmzTargetEnum {
    OpsWorks20130218UpdateRdsDbInstance = "OpsWorks_20130218.UpdateRdsDbInstance"
}
export declare class UpdateRdsDbInstanceRequest extends SpeakeasyBase {
    updateRdsDbInstanceRequest: shared.UpdateRdsDbInstanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRdsDbInstanceXAmzTargetEnum;
}
export declare class UpdateRdsDbInstanceResponse extends SpeakeasyBase {
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
