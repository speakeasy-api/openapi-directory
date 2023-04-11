import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteACLXAmzTargetEnum {
    AmazonMemoryDBDeleteACL = "AmazonMemoryDB.DeleteACL"
}
export declare class DeleteACLRequest extends SpeakeasyBase {
    deleteACLRequest: shared.DeleteACLRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteACLXAmzTargetEnum;
}
export declare class DeleteACLResponse extends SpeakeasyBase {
    /**
     * ACLNotFoundFault
     */
    aclNotFoundFault?: any;
    contentType: string;
    /**
     * Success
     */
    deleteACLResponse?: shared.DeleteACLResponse;
    /**
     * InvalidACLStateFault
     */
    invalidACLStateFault?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
