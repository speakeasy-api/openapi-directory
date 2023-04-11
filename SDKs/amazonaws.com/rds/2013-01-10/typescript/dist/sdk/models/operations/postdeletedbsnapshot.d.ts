import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteDBSnapshotActionEnum {
    DeleteDBSnapshot = "DeleteDBSnapshot"
}
export declare enum POSTDeleteDBSnapshotVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class POSTDeleteDBSnapshotRequest extends SpeakeasyBase {
    action: POSTDeleteDBSnapshotActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteDBSnapshotVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteDBSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
