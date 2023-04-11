import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteSnapshotActionEnum {
    DeleteSnapshot = "DeleteSnapshot"
}
export declare enum POSTDeleteSnapshotVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class POSTDeleteSnapshotRequest extends SpeakeasyBase {
    action: POSTDeleteSnapshotActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteSnapshotVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
