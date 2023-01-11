import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UploadMetadata
/** 
 * Fields to be used while uploading the attachment.
**/
export class UploadMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HeadersToInclude" })
  headersToInclude?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=UrlExpiry" })
  urlExpiry?: string;
}
