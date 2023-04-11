import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetShippingLabelActionEnum {
    GetShippingLabel = "GetShippingLabel"
}
export declare enum POSTGetShippingLabelOperationEnum {
    GetShippingLabel = "GetShippingLabel"
}
export declare enum POSTGetShippingLabelVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class POSTGetShippingLabelRequest extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: POSTGetShippingLabelActionEnum;
    operation: POSTGetShippingLabelOperationEnum;
    requestBody?: Uint8Array;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: POSTGetShippingLabelVersionEnum;
}
export declare class POSTGetShippingLabelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
