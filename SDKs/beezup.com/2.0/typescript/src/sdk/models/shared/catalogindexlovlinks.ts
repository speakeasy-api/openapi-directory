import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonLovLink3 } from "./beezupcommonlovlink3";



export class CatalogIndexLovLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beezUPColumnDataTypeLov" })
  beezUPColumnDataTypeLov: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=beezUPColumnDisplayGroupLov" })
  beezUPColumnDisplayGroupLov: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=beezUPColumnImportanceLov" })
  beezUPColumnImportanceLov: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=beezUPColumnLov" })
  beezUPColumnLov: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=compareOptionLov" })
  compareOptionLov: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=duplicateProductValueStrategyLov" })
  duplicateProductValueStrategyLov: BeezUpCommonLovLink3;
}
