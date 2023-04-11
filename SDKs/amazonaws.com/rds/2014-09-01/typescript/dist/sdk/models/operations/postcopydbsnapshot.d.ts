import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCopyDBSnapshotActionEnum {
    CopyDBSnapshot = "CopyDBSnapshot"
}
export declare enum POSTCopyDBSnapshotVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class POSTCopyDBSnapshotRequest extends SpeakeasyBase {
    action: POSTCopyDBSnapshotActionEnum;
    requestBody?: Uint8Array;
    version: POSTCopyDBSnapshotVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCopyDBSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
