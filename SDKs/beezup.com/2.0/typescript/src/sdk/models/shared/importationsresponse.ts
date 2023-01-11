import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportationReporting } from "./importationreporting";
import { ImportationsResponseLinks } from "./importationsresponselinks";



export class ImportationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=importations", elemType: ImportationReporting })
  importations?: ImportationReporting[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ImportationsResponseLinks;
}
