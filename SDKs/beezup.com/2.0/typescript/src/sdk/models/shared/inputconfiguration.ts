import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputFileConfiguration } from "./inputfileconfiguration";



// InputConfiguration
/** 
 * Describe the input configuration
**/
export class InputConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=files", elemType: InputFileConfiguration })
  files: InputFileConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=transformFileUrl" })
  transformFileUrl?: string;
}
