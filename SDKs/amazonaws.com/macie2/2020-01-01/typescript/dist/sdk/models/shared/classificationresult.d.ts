import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationResultStatus } from "./classificationresultstatus";
import { CustomDataIdentifiers } from "./customdataidentifiers";
import { SensitiveDataItem } from "./sensitivedataitem";
/**
 * Provides the details of a sensitive data finding, including the types, number of occurrences, and locations of the sensitive data that was detected.
 */
export declare class ClassificationResult extends SpeakeasyBase {
    additionalOccurrences?: boolean;
    customDataIdentifiers?: CustomDataIdentifiers;
    mimeType?: string;
    sensitiveData?: SensitiveDataItem[];
    sizeClassified?: number;
    status?: ClassificationResultStatus;
}
