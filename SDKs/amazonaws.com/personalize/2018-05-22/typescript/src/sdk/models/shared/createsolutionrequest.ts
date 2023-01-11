import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SolutionConfig } from "./solutionconfig";



export class CreateSolutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetGroupArn" })
  datasetGroupArn: string;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=performAutoML" })
  performAutoML?: boolean;

  @SpeakeasyMetadata({ data: "json, name=performHPO" })
  performHPO?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recipeArn" })
  recipeArn?: string;

  @SpeakeasyMetadata({ data: "json, name=solutionConfig" })
  solutionConfig?: SolutionConfig;
}
