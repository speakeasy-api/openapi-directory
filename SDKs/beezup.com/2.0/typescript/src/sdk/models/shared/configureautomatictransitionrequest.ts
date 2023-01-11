import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutomaticTransition } from "./automatictransition";



export class ConfigureAutomaticTransitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automaticTransitions", elemType: AutomaticTransition })
  automaticTransitions: AutomaticTransition[];
}
