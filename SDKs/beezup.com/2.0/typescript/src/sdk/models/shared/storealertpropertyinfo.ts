import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoreAlertPropertyInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=propertyId" })
  propertyId: number;

  @SpeakeasyMetadata({ data: "json, name=propertyName" })
  propertyName: string;

  @SpeakeasyMetadata({ data: "json, name=propertyValidationExpression" })
  propertyValidationExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyValue" })
  propertyValue: string;
}
