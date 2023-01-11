import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=merchantApplicationName" })
  merchantApplicationName: string;

  @SpeakeasyMetadata({ data: "json, name=merchantApplicationVersion" })
  merchantApplicationVersion: string;

  @SpeakeasyMetadata({ data: "json, name=merchantEmailAlert" })
  merchantEmailAlert?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=targetUrl" })
  targetUrl: string;
}
