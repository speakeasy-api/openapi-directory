import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InfoSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=informationArguments" })
  informationArguments?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=informationCode" })
  informationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=informationMessage" })
  informationMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyName" })
  propertyName?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyValue" })
  propertyValue?: string;
}
