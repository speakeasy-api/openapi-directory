import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyDBClusterSnapshotAttributeActionEnum {
    ModifyDBClusterSnapshotAttribute = "ModifyDBClusterSnapshotAttribute"
}
export declare enum POSTModifyDBClusterSnapshotAttributeVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTModifyDBClusterSnapshotAttributeRequest extends SpeakeasyBase {
    action: POSTModifyDBClusterSnapshotAttributeActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyDBClusterSnapshotAttributeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyDBClusterSnapshotAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
