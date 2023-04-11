import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifySnapshotTierActionEnum {
    ModifySnapshotTier = "ModifySnapshotTier"
}
export declare enum POSTModifySnapshotTierVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifySnapshotTierRequest extends SpeakeasyBase {
    action: POSTModifySnapshotTierActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifySnapshotTierVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifySnapshotTierResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
