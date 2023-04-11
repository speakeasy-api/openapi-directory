import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRebootDBInstanceActionEnum {
    RebootDBInstance = "RebootDBInstance"
}
export declare enum POSTRebootDBInstanceVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class POSTRebootDBInstanceRequest extends SpeakeasyBase {
    action: POSTRebootDBInstanceActionEnum;
    requestBody?: Uint8Array;
    version: POSTRebootDBInstanceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRebootDBInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
