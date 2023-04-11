import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeExclusionsXAmzTargetEnum {
    InspectorServiceDescribeExclusions = "InspectorService.DescribeExclusions"
}
export declare class DescribeExclusionsRequest extends SpeakeasyBase {
    describeExclusionsRequest: shared.DescribeExclusionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeExclusionsXAmzTargetEnum;
}
export declare class DescribeExclusionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeExclusionsResponse?: shared.DescribeExclusionsResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
