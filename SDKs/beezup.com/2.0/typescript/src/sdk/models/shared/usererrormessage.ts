import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserErrorMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arguments" })
  arguments?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=cultureName" })
  cultureName?: string;

  @SpeakeasyMetadata({ data: "json, name=docUrl" })
  docUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}
