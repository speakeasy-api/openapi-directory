import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETPromoteReadReplicaActionEnum {
    PromoteReadReplica = "PromoteReadReplica"
}
export declare enum GETPromoteReadReplicaVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class GETPromoteReadReplicaRequest extends SpeakeasyBase {
    action: GETPromoteReadReplicaActionEnum;
    backupRetentionPeriod?: number;
    dbInstanceIdentifier: string;
    preferredBackupWindow?: string;
    version: GETPromoteReadReplicaVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETPromoteReadReplicaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
