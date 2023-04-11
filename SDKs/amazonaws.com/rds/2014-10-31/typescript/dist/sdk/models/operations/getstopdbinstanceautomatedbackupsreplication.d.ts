import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETStopDBInstanceAutomatedBackupsReplicationActionEnum {
    StopDBInstanceAutomatedBackupsReplication = "StopDBInstanceAutomatedBackupsReplication"
}
export declare enum GETStopDBInstanceAutomatedBackupsReplicationVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETStopDBInstanceAutomatedBackupsReplicationRequest extends SpeakeasyBase {
    action: GETStopDBInstanceAutomatedBackupsReplicationActionEnum;
    /**
     * The Amazon Resource Name (ARN) of the source DB instance for which to stop replicating automate backups, for example, <code>arn:aws:rds:us-west-2:123456789012:db:mydatabase</code>.
     */
    sourceDBInstanceArn: string;
    version: GETStopDBInstanceAutomatedBackupsReplicationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETStopDBInstanceAutomatedBackupsReplicationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
