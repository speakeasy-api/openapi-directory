import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <p> The type of the custom metric. </p> <important> <p>The type <code>number</code> only takes a single metric value as an input, but when you submit the metrics value in the DeviceMetrics report, you must pass it as an array with a single value.</p> </important>
 */
export declare enum CreateCustomMetricRequestBodyMetricTypeEnum {
    StringList = "string-list",
    IpAddressList = "ip-address-list",
    NumberList = "number-list",
    Number = "number"
}
export declare class CreateCustomMetricRequestBody extends SpeakeasyBase {
    /**
     * Each custom metric must have a unique client request token. If you try to create a new custom metric that already exists with a different token, an exception occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.
     */
    clientRequestToken: string;
    /**
     *  The friendly name in the console for the custom metric. This name doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. You can update the friendly name after you define it.
     */
    displayName?: string;
    /**
     * <p> The type of the custom metric. </p> <important> <p>The type <code>number</code> only takes a single metric value as an input, but when you submit the metrics value in the DeviceMetrics report, you must pass it as an array with a single value.</p> </important>
     */
    metricType: CreateCustomMetricRequestBodyMetricTypeEnum;
    /**
     *  Metadata that can be used to manage the custom metric.
     */
    tags?: shared.Tag[];
}
export declare class CreateCustomMetricRequest extends SpeakeasyBase {
    requestBody: CreateCustomMetricRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The name of the custom metric. This will be used in the metric report submitted from the device/thing. The name can't begin with <code>aws:</code>. You can't change the name after you define it.
     */
    metricName: string;
}
export declare class CreateCustomMetricResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createCustomMetricResponse?: shared.CreateCustomMetricResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
