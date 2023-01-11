import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterInEnum } from "./parameterinenum";
import { LovLink3 } from "./lovlink3";



export class LinkParameter3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=in" })
  in?: ParameterInEnum;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=lovLink" })
  lovLink?: LovLink3;

  @SpeakeasyMetadata({ data: "json, name=lovRequired" })
  lovRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pattern" })
  pattern?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: any;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Record<string, any>;
}
