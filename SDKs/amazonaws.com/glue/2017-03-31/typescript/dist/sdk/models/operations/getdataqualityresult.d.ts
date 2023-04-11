import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDataQualityResultXAmzTargetEnum {
    AWSGlueGetDataQualityResult = "AWSGlue.GetDataQualityResult"
}
export declare class GetDataQualityResultRequest extends SpeakeasyBase {
    getDataQualityResultRequest: shared.GetDataQualityResultRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDataQualityResultXAmzTargetEnum;
}
export declare class GetDataQualityResultResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getDataQualityResultResponse?: shared.GetDataQualityResultResponse;
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
