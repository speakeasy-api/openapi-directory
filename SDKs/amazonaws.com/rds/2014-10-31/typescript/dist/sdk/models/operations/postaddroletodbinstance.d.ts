import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAddRoleToDBInstanceActionEnum {
    AddRoleToDBInstance = "AddRoleToDBInstance"
}
export declare enum POSTAddRoleToDBInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTAddRoleToDBInstanceRequest extends SpeakeasyBase {
    action: POSTAddRoleToDBInstanceActionEnum;
    requestBody?: Uint8Array;
    version: POSTAddRoleToDBInstanceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAddRoleToDBInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
