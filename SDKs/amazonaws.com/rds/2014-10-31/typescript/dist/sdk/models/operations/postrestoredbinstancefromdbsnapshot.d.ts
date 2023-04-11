import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRestoreDBInstanceFromDBSnapshotActionEnum {
    RestoreDBInstanceFromDBSnapshot = "RestoreDBInstanceFromDBSnapshot"
}
export declare enum POSTRestoreDBInstanceFromDBSnapshotVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
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
