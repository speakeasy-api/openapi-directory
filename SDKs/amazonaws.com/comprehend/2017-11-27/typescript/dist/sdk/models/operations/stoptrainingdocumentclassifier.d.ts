import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopTrainingDocumentClassifierXAmzTargetEnum {
    Comprehend20171127StopTrainingDocumentClassifier = "Comprehend_20171127.StopTrainingDocumentClassifier"
}
export declare class StopTrainingDocumentClassifierRequest extends SpeakeasyBase {
    stopTrainingDocumentClassifierRequest: shared.StopTrainingDocumentClassifierRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopTrainingDocumentClassifierXAmzTargetEnum;
}
export declare class StopTrainingDocumentClassifierResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    stopTrainingDocumentClassifierResponse?: Record<string, any>;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
