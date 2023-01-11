import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CatalogStoreIndexLinks } from "./catalogstoreindexlinks";
import { CatalogStoreStatusEnum } from "./catalogstorestatusenum";



export class CatalogStoreIndex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: CatalogStoreIndexLinks;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CatalogStoreStatusEnum;
}
