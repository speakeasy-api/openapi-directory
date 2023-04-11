import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteCustomEntityTypeXAmzTargetEnum {
    AWSGlueDeleteCustomEntityType = "AWSGlue.DeleteCustomEntityType"
}
export declare class DeleteCustomEntityTypeRequest extends SpeakeasyBase {
    deleteCustomEntityTypeRequest: shared.DeleteCustomEntityTypeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCustomEntityTypeXAmzTargetEnum;
}
export declare class DeleteCustomEntityTypeResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteCustomEntityTypeResponse?: shared.DeleteCustomEntityTypeResponse;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
