import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Id extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=legacy_id" })
  legacyId?: number;
}
