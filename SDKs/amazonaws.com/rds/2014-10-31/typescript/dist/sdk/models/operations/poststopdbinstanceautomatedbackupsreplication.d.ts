import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTStopDBInstanceAutomatedBackupsReplicationActionEnum {
    StopDBInstanceAutomatedBackupsReplication = "StopDBInstanceAutomatedBackupsReplication"
}
export declare enum POSTStopDBInstanceAutomatedBackupsReplicationVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTStopDBInstanceAutomatedBackupsReplicationRequest extends SpeakeasyBase {
    action: POSTStopDBInstanceAutomatedBackupsReplicationActionEnum;
    requestBody?: Uint8Array;
    version: POSTStopDBInstanceAutomatedBackupsReplicationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTStopDBInstanceAutomatedBackupsReplicationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
