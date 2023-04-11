import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateParameterGroupXAmzTargetEnum {
    AmazonDaxv3CreateParameterGroup = "AmazonDAXV3.CreateParameterGroup"
}
export declare class CreateParameterGroupRequest extends SpeakeasyBase {
    createParameterGroupRequest: shared.CreateParameterGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateParameterGroupXAmzTargetEnum;
}
export declare class CreateParameterGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createParameterGroupResponse?: shared.CreateParameterGroupResponse;
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
     * ParameterGroupAlreadyExistsFault
     */
    parameterGroupAlreadyExistsFault?: any;
    /**
     * ParameterGroupQuotaExceededFault
     */
    parameterGroupQuotaExceededFault?: any;
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
