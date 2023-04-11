import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSolutionXAmzTargetEnum {
    AmazonPersonalizeDescribeSolution = "AmazonPersonalize.DescribeSolution"
}
export declare class DescribeSolutionRequest extends SpeakeasyBase {
    describeSolutionRequest: shared.DescribeSolutionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSolutionXAmzTargetEnum;
}
export declare class DescribeSolutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSolutionResponse?: shared.DescribeSolutionResponse;
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
