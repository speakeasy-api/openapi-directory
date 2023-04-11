import { SpeakeasyBase } from "../../../internal/utils";
import { DirectionalityEnum } from "./directionalityenum";
import { EncryptionKey } from "./encryptionkey";
import { TerminologyDataFormatEnum } from "./terminologydataformatenum";
/**
 * The properties of the custom terminology.
 */
export declare class TerminologyProperties extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    description?: string;
    directionality?: DirectionalityEnum;
    encryptionKey?: EncryptionKey;
    format?: TerminologyDataFormatEnum;
    lastUpdatedAt?: Date;
    message?: string;
    name?: string;
    sizeBytes?: number;
    skippedTermCount?: number;
    sourceLanguageCode?: string;
    targetLanguageCodes?: string[];
    termCount?: number;
}
