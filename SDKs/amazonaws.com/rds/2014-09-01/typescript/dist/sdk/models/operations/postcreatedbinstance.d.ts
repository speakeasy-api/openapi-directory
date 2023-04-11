import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateDBInstanceActionEnum {
    CreateDBInstance = "CreateDBInstance"
}
export declare enum POSTCreateDBInstanceVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class POSTCreateDBInstanceRequest extends SpeakeasyBase {
    action: POSTCreateDBInstanceActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateDBInstanceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateDBInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
