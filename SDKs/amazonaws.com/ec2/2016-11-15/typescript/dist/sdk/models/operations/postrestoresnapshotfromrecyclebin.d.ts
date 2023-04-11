import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRestoreSnapshotFromRecycleBinActionEnum {
    RestoreSnapshotFromRecycleBin = "RestoreSnapshotFromRecycleBin"
}
export declare enum POSTRestoreSnapshotFromRecycleBinVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTRestoreSnapshotFromRecycleBinRequest extends SpeakeasyBase {
    action: POSTRestoreSnapshotFromRecycleBinActionEnum;
    requestBody?: Uint8Array;
    version: POSTRestoreSnapshotFromRecycleBinVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRestoreSnapshotFromRecycleBinResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
