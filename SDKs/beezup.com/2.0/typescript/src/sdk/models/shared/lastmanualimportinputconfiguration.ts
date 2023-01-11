import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputConfiguration } from "./inputconfiguration";



// LastManualImportInputConfiguration
/** 
 * Last manual import input configuration
**/
export class LastManualImportInputConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=input" })
  input: InputConfiguration;
}
