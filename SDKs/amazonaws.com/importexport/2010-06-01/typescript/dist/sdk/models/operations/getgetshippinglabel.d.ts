import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETShippingLabelActionEnum {
    GetShippingLabel = "GetShippingLabel"
}
export declare enum GETGETShippingLabelOperationEnum {
    GetShippingLabel = "GetShippingLabel"
}
export declare enum GETGETShippingLabelVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class GETGETShippingLabelRequest extends SpeakeasyBase {
    apiVersion?: string;
    awsAccessKeyId: string;
    action: GETGETShippingLabelActionEnum;
    operation: GETGETShippingLabelOperationEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: GETGETShippingLabelVersionEnum;
    city?: string;
    company?: string;
    country?: string;
    jobIds: string[];
    name?: string;
    phoneNumber?: string;
    postalCode?: string;
    stateOrProvince?: string;
    street1?: string;
    street2?: string;
    street3?: string;
}
export declare class GETGETShippingLabelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
