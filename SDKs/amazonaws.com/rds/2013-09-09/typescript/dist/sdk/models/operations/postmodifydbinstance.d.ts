import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyDBInstanceActionEnum {
    ModifyDBInstance = "ModifyDBInstance"
}
export declare enum POSTModifyDBInstanceVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class POSTModifyDBInstanceRequest extends SpeakeasyBase {
    action: POSTModifyDBInstanceActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyDBInstanceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyDBInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
