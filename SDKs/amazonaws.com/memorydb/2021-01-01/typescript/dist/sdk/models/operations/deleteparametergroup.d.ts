import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteParameterGroupXAmzTargetEnum {
    AmazonMemoryDBDeleteParameterGroup = "AmazonMemoryDB.DeleteParameterGroup"
}
export declare class DeleteParameterGroupRequest extends SpeakeasyBase {
    deleteParameterGroupRequest: shared.DeleteParameterGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteParameterGroupXAmzTargetEnum;
}
export declare class DeleteParameterGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteParameterGroupResponse?: shared.DeleteParameterGroupResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
}
