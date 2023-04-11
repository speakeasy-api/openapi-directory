import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSolutionVersionXAmzTargetEnum {
    AmazonPersonalizeDescribeSolutionVersion = "AmazonPersonalize.DescribeSolutionVersion"
}
export declare class DescribeSolutionVersionRequest extends SpeakeasyBase {
    describeSolutionVersionRequest: shared.DescribeSolutionVersionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSolutionVersionXAmzTargetEnum;
}
export declare class DescribeSolutionVersionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSolutionVersionResponse?: shared.DescribeSolutionVersionResponse;
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
