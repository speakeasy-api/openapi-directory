import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateDBInstanceReadReplicaActionEnum {
    CreateDBInstanceReadReplica = "CreateDBInstanceReadReplica"
}
export declare enum POSTCreateDBInstanceReadReplicaVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class POSTCreateDBInstanceReadReplicaRequest extends SpeakeasyBase {
    action: POSTCreateDBInstanceReadReplicaActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateDBInstanceReadReplicaVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateDBInstanceReadReplicaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
