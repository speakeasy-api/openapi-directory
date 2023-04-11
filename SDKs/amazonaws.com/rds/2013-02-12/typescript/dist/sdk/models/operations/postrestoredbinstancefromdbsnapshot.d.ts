import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRestoreDBInstanceFromDBSnapshotActionEnum {
    RestoreDBInstanceFromDBSnapshot = "RestoreDBInstanceFromDBSnapshot"
}
export declare enum POSTRestoreDBInstanceFromDBSnapshotVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class POSTRestoreDBInstanceFromDBSnapshotRequest extends SpeakeasyBase {
    action: POSTRestoreDBInstanceFromDBSnapshotActionEnum;
    requestBody?: Uint8Array;
    version: POSTRestoreDBInstanceFromDBSnapshotVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRestoreDBInstanceFromDBSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
