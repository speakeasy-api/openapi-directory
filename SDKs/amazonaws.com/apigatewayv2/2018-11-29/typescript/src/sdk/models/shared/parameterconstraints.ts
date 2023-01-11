import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ParameterConstraints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Required" })
  required?: Record<string, any>;
}
