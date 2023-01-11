import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompressionFormatStrategyEnum } from "./compressionformatstrategyenum";
import { Credential } from "./credential";
import { DownloadCatalogStrategyEnum } from "./downloadcatalogstrategyenum";



// InputFileFetchConfiguration
/** 
 * Describe the way to download the file
**/
export class InputFileFetchConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compressedRelativePath" })
  compressedRelativePath?: string;

  @SpeakeasyMetadata({ data: "json, name=compressionFormatStrategy" })
  compressionFormatStrategy?: CompressionFormatStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=credential" })
  credential?: Credential;

  @SpeakeasyMetadata({ data: "json, name=downloadCatalogStrategy" })
  downloadCatalogStrategy: DownloadCatalogStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=downloadTimeout" })
  downloadTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}
