import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCopySnapshotActionEnum {
    CopySnapshot = "CopySnapshot"
}
export declare enum POSTCopySnapshotVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCopySnapshotRequest extends SpeakeasyBase {
    action: POSTCopySnapshotActionEnum;
    requestBody?: Uint8Array;
    version: POSTCopySnapshotVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCopySnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
