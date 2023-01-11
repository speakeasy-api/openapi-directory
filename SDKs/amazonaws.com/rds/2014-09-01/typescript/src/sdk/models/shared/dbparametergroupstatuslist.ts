import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DbParameterGroupStatusList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbParameterGroupName?: string;

  @SpeakeasyMetadata()
  parameterApplyStatus?: string;
}
