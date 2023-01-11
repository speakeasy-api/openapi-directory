import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PreviewFile } from "./previewfile";



// PreviewFileResponse
/** 
 * Response object for preview file
**/
export class PreviewFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: PreviewFile;

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: number;
}
