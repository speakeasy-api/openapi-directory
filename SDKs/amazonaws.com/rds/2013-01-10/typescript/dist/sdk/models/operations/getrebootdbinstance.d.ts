import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRebootDBInstanceActionEnum {
    RebootDBInstance = "RebootDBInstance"
}
export declare enum GETRebootDBInstanceVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GETRebootDBInstanceRequest extends SpeakeasyBase {
    action: GETRebootDBInstanceActionEnum;
    dbInstanceIdentifier: string;
    forceFailover?: boolean;
    version: GETRebootDBInstanceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRebootDBInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
