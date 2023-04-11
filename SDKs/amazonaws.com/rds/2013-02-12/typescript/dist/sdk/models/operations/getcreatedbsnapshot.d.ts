import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateDBSnapshotActionEnum {
    CreateDBSnapshot = "CreateDBSnapshot"
}
export declare enum GETCreateDBSnapshotVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GETCreateDBSnapshotRequest extends SpeakeasyBase {
    action: GETCreateDBSnapshotActionEnum;
    dbInstanceIdentifier: string;
    dbSnapshotIdentifier: string;
    version: GETCreateDBSnapshotVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateDBSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
