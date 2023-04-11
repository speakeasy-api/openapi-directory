import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteDBInstanceActionEnum {
    DeleteDBInstance = "DeleteDBInstance"
}
export declare enum POSTDeleteDBInstanceVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class POSTDeleteDBInstanceRequest extends SpeakeasyBase {
    action: POSTDeleteDBInstanceActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteDBInstanceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteDBInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
