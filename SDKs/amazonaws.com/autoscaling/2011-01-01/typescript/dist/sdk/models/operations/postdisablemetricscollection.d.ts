import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDisableMetricsCollectionActionEnum {
    DisableMetricsCollection = "DisableMetricsCollection"
}
export declare enum POSTDisableMetricsCollectionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTDisableMetricsCollectionRequest extends SpeakeasyBase {
    action: POSTDisableMetricsCollectionActionEnum;
    requestBody?: Uint8Array;
    version: POSTDisableMetricsCollectionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDisableMetricsCollectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
