import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
import { InputFileLocation } from "./inputfilelocation";
import { OverwriteExistingEnum } from "./overwriteexistingenum";
/**
 * Each step type has its own <code>StepDetails</code> structure.
 */
export declare class DecryptStepDetails extends SpeakeasyBase {
    /**
     * Specifies the location for the file that's being processed.
     */
    destinationFileLocation: InputFileLocation;
    name?: string;
    overwriteExisting?: OverwriteExistingEnum;
    sourceFileLocation?: string;
    type: EncryptionTypeEnum;
}
