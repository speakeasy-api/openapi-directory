import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetModelTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: Record<string, any>;
}
