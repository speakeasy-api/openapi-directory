import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConnectionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: Record<string, any>;
}
