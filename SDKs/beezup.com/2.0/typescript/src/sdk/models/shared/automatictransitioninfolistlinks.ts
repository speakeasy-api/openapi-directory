import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksConfigureAutomaticTransitionsLink } from "./linksconfigureautomatictransitionslink";
import { LinksGetAutomaticTransitionsLink } from "./linksgetautomatictransitionslink";



export class AutomaticTransitionInfoListLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configure" })
  configure: LinksConfigureAutomaticTransitionsLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetAutomaticTransitionsLink;
}
