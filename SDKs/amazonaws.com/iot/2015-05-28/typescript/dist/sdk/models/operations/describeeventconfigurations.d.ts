import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeEventConfigurationsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeEventConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEventConfigurationsResponse?: shared.DescribeEventConfigurationsResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
