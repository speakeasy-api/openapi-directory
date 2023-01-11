import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DocumentBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_field1" })
  customField1?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_field2" })
  customField2?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;
}
