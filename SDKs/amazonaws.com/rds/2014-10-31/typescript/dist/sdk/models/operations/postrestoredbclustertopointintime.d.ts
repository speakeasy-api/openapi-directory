import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRestoreDBClusterToPointInTimeActionEnum {
    RestoreDBClusterToPointInTime = "RestoreDBClusterToPointInTime"
}
export declare enum POSTRestoreDBClusterToPointInTimeVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTRestoreDBClusterToPointInTimeRequest extends SpeakeasyBase {
    action: POSTRestoreDBClusterToPointInTimeActionEnum;
    requestBody?: Uint8Array;
    version: POSTRestoreDBClusterToPointInTimeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRestoreDBClusterToPointInTimeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
