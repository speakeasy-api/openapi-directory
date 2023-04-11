import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionKey } from "./encryptionkey";
import { ParallelDataConfig } from "./paralleldataconfig";
import { ParallelDataStatusEnum } from "./paralleldatastatusenum";
/**
 * The properties of a parallel data resource.
 */
export declare class ParallelDataProperties extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    description?: string;
    /**
     * The encryption key used to encrypt this object.
     */
    encryptionKey?: EncryptionKey;
    failedRecordCount?: number;
    importedDataSize?: number;
    importedRecordCount?: number;
    lastUpdatedAt?: Date;
    latestUpdateAttemptAt?: Date;
    latestUpdateAttemptStatus?: ParallelDataStatusEnum;
    message?: string;
    name?: string;
    parallelDataConfig?: ParallelDataConfig;
    skippedRecordCount?: number;
    sourceLanguageCode?: string;
    status?: ParallelDataStatusEnum;
    targetLanguageCodes?: string[];
}
