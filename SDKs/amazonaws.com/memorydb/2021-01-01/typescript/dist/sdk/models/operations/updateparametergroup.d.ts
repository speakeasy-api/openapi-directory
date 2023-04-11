import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateParameterGroupXAmzTargetEnum {
    AmazonMemoryDBUpdateParameterGroup = "AmazonMemoryDB.UpdateParameterGroup"
}
export declare class UpdateParameterGroupRequest extends SpeakeasyBase {
    updateParameterGroupRequest: shared.UpdateParameterGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateParameterGroupXAmzTargetEnum;
}
export declare class UpdateParameterGroupResponse extends SpeakeasyBase {
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
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateParameterGroupResponse?: shared.UpdateParameterGroupResponse;
}
