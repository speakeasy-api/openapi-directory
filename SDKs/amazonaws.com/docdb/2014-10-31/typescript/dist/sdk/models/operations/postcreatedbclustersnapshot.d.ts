import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateDBClusterSnapshotActionEnum {
    CreateDBClusterSnapshot = "CreateDBClusterSnapshot"
}
export declare enum POSTCreateDBClusterSnapshotVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTCreateDBClusterSnapshotRequest extends SpeakeasyBase {
    action: POSTCreateDBClusterSnapshotActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateDBClusterSnapshotVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateDBClusterSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
