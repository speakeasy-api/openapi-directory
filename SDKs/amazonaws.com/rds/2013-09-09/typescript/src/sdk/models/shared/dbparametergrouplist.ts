import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DbParameterGroupList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbParameterGroupFamily?: string;

  @SpeakeasyMetadata()
  dbParameterGroupName?: string;

  @SpeakeasyMetadata()
  description?: string;
}
