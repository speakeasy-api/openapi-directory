import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Config extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=providers" })
  providers: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=topics" })
  topics: any[];
}
