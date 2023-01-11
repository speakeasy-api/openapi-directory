import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CustomVitalTypeDataTypeEnum {
    Text = "text",
    Number = "number",
    SingleSel = "single_sel"
}


export class CustomVitalType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_values" })
  allowedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=data_type" })
  dataType?: CustomVitalTypeDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor?: string;

  @SpeakeasyMetadata({ data: "json, name=fraction_delimiter" })
  fractionDelimiter?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_fraction_field" })
  isFractionField?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;
}
