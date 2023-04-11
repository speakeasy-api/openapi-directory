import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteClassifierXAmzTargetEnum {
    AWSGlueDeleteClassifier = "AWSGlue.DeleteClassifier"
}
export declare class DeleteClassifierRequest extends SpeakeasyBase {
    deleteClassifierRequest: shared.DeleteClassifierRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteClassifierXAmzTargetEnum;
}
export declare class DeleteClassifierResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteClassifierResponse?: Record<string, any>;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
