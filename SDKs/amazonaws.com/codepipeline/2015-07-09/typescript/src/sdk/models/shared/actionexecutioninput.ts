import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeId } from "./actiontypeid";
import { ArtifactDetail } from "./artifactdetail";



// ActionExecutionInput
/** 
 * Input information used for an action execution.
**/
export class ActionExecutionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionTypeId" })
  actionTypeId?: ActionTypeId;

  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=inputArtifacts", elemType: ArtifactDetail })
  inputArtifacts?: ArtifactDetail[];

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=resolvedConfiguration" })
  resolvedConfiguration?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
