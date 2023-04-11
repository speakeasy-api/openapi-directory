import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTImportSnapshotActionEnum {
    ImportSnapshot = "ImportSnapshot"
}
export declare enum POSTImportSnapshotVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTImportSnapshotRequest extends SpeakeasyBase {
    action: POSTImportSnapshotActionEnum;
    requestBody?: Uint8Array;
    version: POSTImportSnapshotVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTImportSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
