import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCopyDBSnapshotActionEnum {
    CopyDBSnapshot = "CopyDBSnapshot"
}
export declare enum GETCopyDBSnapshotVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GETCopyDBSnapshotRequest extends SpeakeasyBase {
    action: GETCopyDBSnapshotActionEnum;
    sourceDBSnapshotIdentifier: string;
    targetDBSnapshotIdentifier: string;
    version: GETCopyDBSnapshotVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCopyDBSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
