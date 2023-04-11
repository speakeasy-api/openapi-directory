import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTEnableMetricsCollectionActionEnum {
    EnableMetricsCollection = "EnableMetricsCollection"
}
export declare enum POSTEnableMetricsCollectionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTEnableMetricsCollectionRequest extends SpeakeasyBase {
    action: POSTEnableMetricsCollectionActionEnum;
    requestBody?: Uint8Array;
    version: POSTEnableMetricsCollectionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTEnableMetricsCollectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
