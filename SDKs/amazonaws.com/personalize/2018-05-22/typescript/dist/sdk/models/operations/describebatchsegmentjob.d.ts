import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeBatchSegmentJobXAmzTargetEnum {
    AmazonPersonalizeDescribeBatchSegmentJob = "AmazonPersonalize.DescribeBatchSegmentJob"
}
export declare class DescribeBatchSegmentJobRequest extends SpeakeasyBase {
    describeBatchSegmentJobRequest: shared.DescribeBatchSegmentJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeBatchSegmentJobXAmzTargetEnum;
}
export declare class DescribeBatchSegmentJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeBatchSegmentJobResponse?: shared.DescribeBatchSegmentJobResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
