import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRestoreSnapshotTierActionEnum {
    RestoreSnapshotTier = "RestoreSnapshotTier"
}
export declare enum POSTRestoreSnapshotTierVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTRestoreSnapshotTierRequest extends SpeakeasyBase {
    action: POSTRestoreSnapshotTierActionEnum;
    requestBody?: Uint8Array;
    version: POSTRestoreSnapshotTierVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRestoreSnapshotTierResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
