import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TestMetricFilterXAmzTargetEnum {
    Logs20140328TestMetricFilter = "Logs_20140328.TestMetricFilter"
}
export declare class TestMetricFilterRequest extends SpeakeasyBase {
    testMetricFilterRequest: shared.TestMetricFilterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TestMetricFilterXAmzTargetEnum;
}
export declare class TestMetricFilterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    testMetricFilterResponse?: shared.TestMetricFilterResponse;
}
