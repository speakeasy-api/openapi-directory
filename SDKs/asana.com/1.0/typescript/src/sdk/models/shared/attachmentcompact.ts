import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttachmentCompact
/** 
 * An *attachment* object represents any file attached to a task in Asana, whether it’s an uploaded file or one associated via a third-party service such as Dropbox or Google Drive.
**/
export class AttachmentCompact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: any;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}
