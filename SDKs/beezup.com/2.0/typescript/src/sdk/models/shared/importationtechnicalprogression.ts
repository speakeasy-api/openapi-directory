import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImportationTechnicalProgression extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stepsProgression" })
  stepsProgression?: Record<string, string[]>;
}
