import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateGlobalClusterMessage extends SpeakeasyBase {
    databaseName?: string;
    deletionProtection?: boolean;
    engine?: string;
    engineVersion?: string;
    globalClusterIdentifier?: string;
    sourceDBClusterIdentifier?: string;
    storageEncrypted?: boolean;
}
