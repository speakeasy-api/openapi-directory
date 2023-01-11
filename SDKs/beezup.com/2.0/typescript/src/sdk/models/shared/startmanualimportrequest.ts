import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DuplicateProductValueConfiguration } from "./duplicateproductvalueconfiguration";
import { InputConfiguration } from "./inputconfiguration";



// StartManualImportRequest
/** 
 * The message request start a manual importation process. Indicate the way to handle duplicate product. Can be null if you want to reuse the configuration of the previous importation succeed.
**/
export class StartManualImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duplicateProductSkuConfiguration" })
  duplicateProductSkuConfiguration?: DuplicateProductValueConfiguration;

  @SpeakeasyMetadata({ data: "json, name=input" })
  input: InputConfiguration;
}
