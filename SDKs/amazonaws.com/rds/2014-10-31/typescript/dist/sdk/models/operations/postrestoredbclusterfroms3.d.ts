import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRestoreDBClusterFromS3ActionEnum {
    RestoreDBClusterFromS3 = "RestoreDBClusterFromS3"
}
export declare enum POSTRestoreDBClusterFromS3VersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTRestoreDBClusterFromS3Request extends SpeakeasyBase {
    action: POSTRestoreDBClusterFromS3ActionEnum;
    requestBody?: Uint8Array;
    version: POSTRestoreDBClusterFromS3VersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRestoreDBClusterFromS3Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
