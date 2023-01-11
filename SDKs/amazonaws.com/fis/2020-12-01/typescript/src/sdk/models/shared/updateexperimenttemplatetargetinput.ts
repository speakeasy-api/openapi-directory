import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExperimentTemplateTargetInputFilter } from "./experimenttemplatetargetinputfilter";



export class UpdateExperimentTemplateTargetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: ExperimentTemplateTargetInputFilter })
  filters?: ExperimentTemplateTargetInputFilter[];

  @SpeakeasyMetadata({ data: "json, name=resourceArns" })
  resourceArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=resourceTags" })
  resourceTags?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=selectionMode" })
  selectionMode?: string;
}
