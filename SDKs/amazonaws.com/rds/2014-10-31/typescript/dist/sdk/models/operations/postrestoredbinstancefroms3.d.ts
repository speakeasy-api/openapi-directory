import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRestoreDBInstanceFromS3ActionEnum {
    RestoreDBInstanceFromS3 = "RestoreDBInstanceFromS3"
}
export declare enum POSTRestoreDBInstanceFromS3VersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTRestoreDBInstanceFromS3Request extends SpeakeasyBase {
    action: POSTRestoreDBInstanceFromS3ActionEnum;
    requestBody?: Uint8Array;
    version: POSTRestoreDBInstanceFromS3VersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRestoreDBInstanceFromS3Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
