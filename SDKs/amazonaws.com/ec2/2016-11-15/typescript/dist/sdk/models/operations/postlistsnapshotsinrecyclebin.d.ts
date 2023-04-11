import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListSnapshotsInRecycleBinActionEnum {
    ListSnapshotsInRecycleBin = "ListSnapshotsInRecycleBin"
}
export declare enum POSTListSnapshotsInRecycleBinVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTListSnapshotsInRecycleBinRequest extends SpeakeasyBase {
    action: POSTListSnapshotsInRecycleBinActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTListSnapshotsInRecycleBinVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListSnapshotsInRecycleBinResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
