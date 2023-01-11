import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutomaticTransitionInfo } from "./automatictransitioninfo";
import { AutomaticTransitionInfoListLinks } from "./automatictransitioninfolistlinks";



export class AutomaticTransitionInfoList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automaticTransitionInfos", elemType: AutomaticTransitionInfo })
  automaticTransitionInfos?: AutomaticTransitionInfo[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: AutomaticTransitionInfoListLinks;
}
