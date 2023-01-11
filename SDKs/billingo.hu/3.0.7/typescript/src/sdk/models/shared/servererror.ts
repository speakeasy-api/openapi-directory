import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ServerError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=trace_id" })
  traceId?: string;
}
