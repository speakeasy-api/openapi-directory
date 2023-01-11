import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EmptyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string[];

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: number;
}
