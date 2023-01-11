import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CrawlDatamodelField } from "./crawldatamodelfield";
import { CrawlDatamodelGroup } from "./crawldatamodelgroup";



export class CrawlDatamodel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields", elemType: CrawlDatamodelField })
  fields: CrawlDatamodelField[];

  @SpeakeasyMetadata({ data: "json, name=groups", elemType: CrawlDatamodelGroup })
  groups: CrawlDatamodelGroup[];
}
