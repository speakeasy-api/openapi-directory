import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}


export class ErrorT extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: ErrorError;
}
