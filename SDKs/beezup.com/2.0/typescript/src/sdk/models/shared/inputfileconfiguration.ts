import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputFileFetchConfiguration } from "./inputfilefetchconfiguration";
import { InputFileReadConfiguration } from "./inputfilereadconfiguration";



// InputFileConfiguration
/** 
 * Describe how to get and read a file
**/
export class InputFileConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fetch" })
  fetch: InputFileFetchConfiguration;

  @SpeakeasyMetadata({ data: "json, name=fileNumber" })
  fileNumber: number;

  @SpeakeasyMetadata({ data: "json, name=read" })
  read: InputFileReadConfiguration;
}
