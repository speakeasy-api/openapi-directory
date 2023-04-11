import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifySnapshotAttributeActionEnum {
    ModifySnapshotAttribute = "ModifySnapshotAttribute"
}
export declare enum POSTModifySnapshotAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifySnapshotAttributeRequest extends SpeakeasyBase {
    action: POSTModifySnapshotAttributeActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifySnapshotAttributeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifySnapshotAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
