import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRestoreDBInstanceToPointInTimeActionEnum {
    RestoreDBInstanceToPointInTime = "RestoreDBInstanceToPointInTime"
}
export declare enum POSTRestoreDBInstanceToPointInTimeVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTRestoreDBInstanceToPointInTimeRequest extends SpeakeasyBase {
    action: POSTRestoreDBInstanceToPointInTimeActionEnum;
    requestBody?: Uint8Array;
    version: POSTRestoreDBInstanceToPointInTimeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRestoreDBInstanceToPointInTimeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
