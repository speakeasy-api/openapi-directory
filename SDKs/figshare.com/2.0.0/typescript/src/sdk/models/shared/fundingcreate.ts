import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FundingCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
