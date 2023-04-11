import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAttachInstancesActionEnum {
    AttachInstances = "AttachInstances"
}
export declare enum POSTAttachInstancesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTAttachInstancesRequest extends SpeakeasyBase {
    action: POSTAttachInstancesActionEnum;
    requestBody?: Uint8Array;
    version: POSTAttachInstancesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAttachInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
