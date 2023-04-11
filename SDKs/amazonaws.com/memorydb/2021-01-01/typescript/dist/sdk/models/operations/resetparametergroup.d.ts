import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ResetParameterGroupXAmzTargetEnum {
    AmazonMemoryDBResetParameterGroup = "AmazonMemoryDB.ResetParameterGroup"
}
export declare class ResetParameterGroupRequest extends SpeakeasyBase {
    resetParameterGroupRequest: shared.ResetParameterGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResetParameterGroupXAmzTargetEnum;
}
export declare class ResetParameterGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidParameterGroupStateFault
     */
    invalidParameterGroupStateFault?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * ParameterGroupNotFoundFault
     */
    parameterGroupNotFoundFault?: any;
    /**
     * Success
     */
    resetParameterGroupResponse?: shared.ResetParameterGroupResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
}
