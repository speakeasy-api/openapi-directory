import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EndpointSendConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BodyOverride" })
  bodyOverride?: string;

  @SpeakeasyMetadata({ data: "json, name=Context" })
  context?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=RawContent" })
  rawContent?: string;

  @SpeakeasyMetadata({ data: "json, name=Substitutions" })
  substitutions?: Record<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=TitleOverride" })
  titleOverride?: string;
}
