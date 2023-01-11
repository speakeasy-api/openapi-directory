import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExperimentAction } from "./experimentaction";
import { ExperimentState } from "./experimentstate";
import { ExperimentStopCondition } from "./experimentstopcondition";
import { ExperimentTarget } from "./experimenttarget";



// Experiment
/** 
 * Describes an experiment.
**/
export class Experiment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: ExperimentAction })
  actions?: Record<string, ExperimentAction>;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=experimentTemplateId" })
  experimentTemplateId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ExperimentState;

  @SpeakeasyMetadata({ data: "json, name=stopConditions", elemType: ExperimentStopCondition })
  stopConditions?: ExperimentStopCondition[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: ExperimentTarget })
  targets?: Record<string, ExperimentTarget>;
}
