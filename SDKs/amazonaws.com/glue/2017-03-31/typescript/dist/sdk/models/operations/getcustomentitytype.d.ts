import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCustomEntityTypeXAmzTargetEnum {
    AWSGlueGetCustomEntityType = "AWSGlue.GetCustomEntityType"
}
export declare class GetCustomEntityTypeRequest extends SpeakeasyBase {
    getCustomEntityTypeRequest: shared.GetCustomEntityTypeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCustomEntityTypeXAmzTargetEnum;
}
export declare class GetCustomEntityTypeResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getCustomEntityTypeResponse?: shared.GetCustomEntityTypeResponse;
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
