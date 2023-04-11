import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteDBSnapshotActionEnum {
    DeleteDBSnapshot = "DeleteDBSnapshot"
}
export declare enum GETDeleteDBSnapshotVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class GETDeleteDBSnapshotRequest extends SpeakeasyBase {
    action: GETDeleteDBSnapshotActionEnum;
    dbSnapshotIdentifier: string;
    version: GETDeleteDBSnapshotVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteDBSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
