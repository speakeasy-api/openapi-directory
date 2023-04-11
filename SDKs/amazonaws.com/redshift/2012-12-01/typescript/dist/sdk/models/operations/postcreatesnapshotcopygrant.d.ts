import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateSnapshotCopyGrantActionEnum {
    CreateSnapshotCopyGrant = "CreateSnapshotCopyGrant"
}
export declare enum POSTCreateSnapshotCopyGrantVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTCreateSnapshotCopyGrantRequest extends SpeakeasyBase {
    action: POSTCreateSnapshotCopyGrantActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateSnapshotCopyGrantVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateSnapshotCopyGrantResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
