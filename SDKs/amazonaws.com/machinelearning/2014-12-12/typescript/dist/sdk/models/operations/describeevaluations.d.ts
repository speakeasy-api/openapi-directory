import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEvaluationsXAmzTargetEnum {
    AmazonML20141212DescribeEvaluations = "AmazonML_20141212.DescribeEvaluations"
}
export declare class DescribeEvaluationsRequest extends SpeakeasyBase {
    describeEvaluationsInput: shared.DescribeEvaluationsInput;
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
    xAmzTarget: DescribeEvaluationsXAmzTargetEnum;
}
export declare class DescribeEvaluationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEvaluationsOutput?: shared.DescribeEvaluationsOutput;
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
