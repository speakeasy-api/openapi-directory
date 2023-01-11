import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbParameterGroupList } from "./dbparametergrouplist";



export class DbParameterGroupsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbParameterGroupList })
  dbParameterGroups?: DbParameterGroupList[];

  @SpeakeasyMetadata()
  marker?: string;
}
