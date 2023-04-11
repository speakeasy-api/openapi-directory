import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeQueryDefinitionsXAmzTargetEnum {
    Logs20140328DescribeQueryDefinitions = "Logs_20140328.DescribeQueryDefinitions"
}
export declare class DescribeQueryDefinitionsRequest extends SpeakeasyBase {
    describeQueryDefinitionsRequest: shared.DescribeQueryDefinitionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeQueryDefinitionsXAmzTargetEnum;
}
export declare class DescribeQueryDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeQueryDefinitionsResponse?: shared.DescribeQueryDefinitionsResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
