import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SuccessSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyName" })
  propertyName?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyValue" })
  propertyValue?: string;

  @SpeakeasyMetadata({ data: "json, name=successArguments" })
  successArguments?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=successCode" })
  successCode?: string;

  @SpeakeasyMetadata({ data: "json, name=successMessage" })
  successMessage?: string;
}
