import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteMLTransformXAmzTargetEnum {
    AWSGlueDeleteMLTransform = "AWSGlue.DeleteMLTransform"
}
export declare class DeleteMLTransformRequest extends SpeakeasyBase {
    deleteMLTransformRequest: shared.DeleteMLTransformRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMLTransformXAmzTargetEnum;
}
export declare class DeleteMLTransformResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteMLTransformResponse?: shared.DeleteMLTransformResponse;
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
