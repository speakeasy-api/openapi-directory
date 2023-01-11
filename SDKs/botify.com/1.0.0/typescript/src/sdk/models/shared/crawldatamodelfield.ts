import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CrawlDatamodelField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=group" })
  group: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=multiple" })
  multiple: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions: string[];

  @SpeakeasyMetadata({ data: "json, name=subtype" })
  subtype: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
