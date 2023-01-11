import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConnectionImportDataCredentials extends SpeakeasyBase {
    accessToken?: string;
    expiresIn?: number;
    issuedAt?: Date;
    refreshToken: string;
}
export declare class ConnectionImportData extends SpeakeasyBase {
    credentials?: ConnectionImportDataCredentials;
    metadata?: Record<string, any>;
    settings?: Record<string, any>;
}
