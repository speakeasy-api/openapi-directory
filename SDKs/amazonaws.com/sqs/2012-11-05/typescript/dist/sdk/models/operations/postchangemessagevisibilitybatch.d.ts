import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTChangeMessageVisibilityBatchActionEnum {
    ChangeMessageVisibilityBatch = "ChangeMessageVisibilityBatch"
}
export declare enum POSTChangeMessageVisibilityBatchVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class POSTChangeMessageVisibilityBatchRequest extends SpeakeasyBase {
    action: POSTChangeMessageVisibilityBatchActionEnum;
    requestBody?: Uint8Array;
    version: POSTChangeMessageVisibilityBatchVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTChangeMessageVisibilityBatchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
