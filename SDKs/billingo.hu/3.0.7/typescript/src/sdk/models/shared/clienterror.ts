import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClientError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
