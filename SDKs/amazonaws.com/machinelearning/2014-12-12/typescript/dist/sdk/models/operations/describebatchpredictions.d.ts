import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeBatchPredictionsXAmzTargetEnum {
    AmazonML20141212DescribeBatchPredictions = "AmazonML_20141212.DescribeBatchPredictions"
}
export declare class DescribeBatchPredictionsRequest extends SpeakeasyBase {
    describeBatchPredictionsInput: shared.DescribeBatchPredictionsInput;
    /**
     * Pagination limit
     */
    limit?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeBatchPredictionsXAmzTargetEnum;
}
export declare class DescribeBatchPredictionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeBatchPredictionsOutput?: shared.DescribeBatchPredictionsOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
