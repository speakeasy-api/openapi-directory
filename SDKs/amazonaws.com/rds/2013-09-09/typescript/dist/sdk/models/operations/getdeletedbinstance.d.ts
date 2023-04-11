import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteDBInstanceActionEnum {
    DeleteDBInstance = "DeleteDBInstance"
}
export declare enum GETDeleteDBInstanceVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class GETDeleteDBInstanceRequest extends SpeakeasyBase {
    action: GETDeleteDBInstanceActionEnum;
    dbInstanceIdentifier: string;
    finalDBSnapshotIdentifier?: string;
    skipFinalSnapshot?: boolean;
    version: GETDeleteDBInstanceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteDBInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
