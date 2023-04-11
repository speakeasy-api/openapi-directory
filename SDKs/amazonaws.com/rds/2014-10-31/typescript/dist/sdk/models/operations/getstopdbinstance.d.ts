import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETStopDBInstanceActionEnum {
    StopDBInstance = "StopDBInstance"
}
export declare enum GETStopDBInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETStopDBInstanceRequest extends SpeakeasyBase {
    action: GETStopDBInstanceActionEnum;
    /**
     * The user-supplied instance identifier.
     */
    dbInstanceIdentifier: string;
    /**
     * The user-supplied instance identifier of the DB Snapshot created immediately before the DB instance is stopped.
     */
    dbSnapshotIdentifier?: string;
    version: GETStopDBInstanceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETStopDBInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
