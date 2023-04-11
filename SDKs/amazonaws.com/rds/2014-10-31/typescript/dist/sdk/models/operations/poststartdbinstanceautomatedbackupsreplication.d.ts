import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTStartDBInstanceAutomatedBackupsReplicationActionEnum {
    StartDBInstanceAutomatedBackupsReplication = "StartDBInstanceAutomatedBackupsReplication"
}
export declare enum POSTStartDBInstanceAutomatedBackupsReplicationVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTStartDBInstanceAutomatedBackupsReplicationRequest extends SpeakeasyBase {
    action: POSTStartDBInstanceAutomatedBackupsReplicationActionEnum;
    requestBody?: Uint8Array;
    version: POSTStartDBInstanceAutomatedBackupsReplicationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTStartDBInstanceAutomatedBackupsReplicationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
