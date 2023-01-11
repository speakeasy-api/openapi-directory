import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateWorkflowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultRunProperties" })
  defaultRunProperties?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxConcurrentRuns" })
  maxConcurrentRuns?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Record<string, string>;
}
