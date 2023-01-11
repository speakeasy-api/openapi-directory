import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelTypeEnum } from "./channeltypeenum";



export class AddressConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BodyOverride" })
  bodyOverride?: string;

  @SpeakeasyMetadata({ data: "json, name=ChannelType" })
  channelType?: ChannelTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Context" })
  context?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=RawContent" })
  rawContent?: string;

  @SpeakeasyMetadata({ data: "json, name=Substitutions" })
  substitutions?: Record<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=TitleOverride" })
  titleOverride?: string;
}
