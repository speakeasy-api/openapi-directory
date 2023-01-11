import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GitignoreGetAllTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  gitignoreGetAllTemplates200ApplicationJSONStrings?: string[];
}
