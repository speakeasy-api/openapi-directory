import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Functionality extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order: number;
}
