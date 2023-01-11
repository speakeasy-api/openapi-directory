import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksConfigureAutomaticTransitionsLink } from "./linksconfigureautomatictransitionslink";



export class AutomaticTransitionInfoLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configure" })
  configure: LinksConfigureAutomaticTransitionsLink;
}
