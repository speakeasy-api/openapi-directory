import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Container extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: string[];

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=ports" })
  ports?: Record<string, string>;
}
