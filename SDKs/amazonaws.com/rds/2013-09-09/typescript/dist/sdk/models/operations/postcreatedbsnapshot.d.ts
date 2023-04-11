import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateDBSnapshotActionEnum {
    CreateDBSnapshot = "CreateDBSnapshot"
}
export declare enum POSTCreateDBSnapshotVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class POSTCreateDBSnapshotRequest extends SpeakeasyBase {
    action: POSTCreateDBSnapshotActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateDBSnapshotVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateDBSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
