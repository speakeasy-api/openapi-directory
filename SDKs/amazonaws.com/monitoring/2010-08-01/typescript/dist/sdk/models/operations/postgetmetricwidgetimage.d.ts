import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetMetricWidgetImageActionEnum {
    GetMetricWidgetImage = "GetMetricWidgetImage"
}
export declare enum POSTGetMetricWidgetImageVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTGetMetricWidgetImageRequest extends SpeakeasyBase {
    action: POSTGetMetricWidgetImageActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetMetricWidgetImageVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetMetricWidgetImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
