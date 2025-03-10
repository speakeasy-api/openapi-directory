import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCopyDBSnapshotActionEnum {
    CopyDBSnapshot = "CopyDBSnapshot"
}
export declare enum POSTCopyDBSnapshotVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class POSTCopyDBSnapshotRequest extends SpeakeasyBase {
    action: POSTCopyDBSnapshotActionEnum;
    requestBody?: Uint8Array;
    version: POSTCopyDBSnapshotVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCopyDBSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
