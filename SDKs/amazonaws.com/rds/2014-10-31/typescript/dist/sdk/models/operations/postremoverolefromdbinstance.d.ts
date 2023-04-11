import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRemoveRoleFromDBInstanceActionEnum {
    RemoveRoleFromDBInstance = "RemoveRoleFromDBInstance"
}
export declare enum POSTRemoveRoleFromDBInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTRemoveRoleFromDBInstanceRequest extends SpeakeasyBase {
    action: POSTRemoveRoleFromDBInstanceActionEnum;
    requestBody?: Uint8Array;
    version: POSTRemoveRoleFromDBInstanceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRemoveRoleFromDBInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
