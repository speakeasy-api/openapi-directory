import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAuthorizeSnapshotAccessActionEnum {
    AuthorizeSnapshotAccess = "AuthorizeSnapshotAccess"
}
export declare enum POSTAuthorizeSnapshotAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTAuthorizeSnapshotAccessRequest extends SpeakeasyBase {
    action: POSTAuthorizeSnapshotAccessActionEnum;
    requestBody?: Uint8Array;
    version: POSTAuthorizeSnapshotAccessVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAuthorizeSnapshotAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
