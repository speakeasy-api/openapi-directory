import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteDBInstanceAutomatedBackupActionEnum {
    DeleteDBInstanceAutomatedBackup = "DeleteDBInstanceAutomatedBackup"
}
export declare enum POSTDeleteDBInstanceAutomatedBackupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTDeleteDBInstanceAutomatedBackupRequest extends SpeakeasyBase {
    action: POSTDeleteDBInstanceAutomatedBackupActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteDBInstanceAutomatedBackupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteDBInstanceAutomatedBackupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
