import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateDBInstanceReadReplicaActionEnum {
    CreateDBInstanceReadReplica = "CreateDBInstanceReadReplica"
}
export declare enum GETCreateDBInstanceReadReplicaVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GETCreateDBInstanceReadReplicaRequest extends SpeakeasyBase {
    action: GETCreateDBInstanceReadReplicaActionEnum;
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    dbInstanceClass?: string;
    dbInstanceIdentifier: string;
    iops?: number;
    optionGroupName?: string;
    port?: number;
    publiclyAccessible?: boolean;
    sourceDBInstanceIdentifier: string;
    version: GETCreateDBInstanceReadReplicaVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateDBInstanceReadReplicaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
