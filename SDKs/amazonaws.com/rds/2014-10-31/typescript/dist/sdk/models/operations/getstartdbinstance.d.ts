import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETStartDBInstanceActionEnum {
    StartDBInstance = "StartDBInstance"
}
export declare enum GETStartDBInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETStartDBInstanceRequest extends SpeakeasyBase {
    action: GETStartDBInstanceActionEnum;
    /**
     * The user-supplied instance identifier.
     */
    dbInstanceIdentifier: string;
    version: GETStartDBInstanceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETStartDBInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
