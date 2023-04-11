import { SpeakeasyBase } from "../../../internal/utils";
import { DuplicateProductValueConfiguration } from "./duplicateproductvalueconfiguration";
import { InputConfiguration } from "./inputconfiguration";
/**
 * The message request start a manual importation process. Indicate the way to handle duplicate product. Can be null if you want to reuse the configuration of the previous importation succeed.
 */
export declare class StartManualImportRequest extends SpeakeasyBase {
    /**
     * Describe how you want to manage the duplication of the product value
     */
    duplicateProductSkuConfiguration?: DuplicateProductValueConfiguration;
    /**
     * Describe the input configuration
     */
    input: InputConfiguration;
}
