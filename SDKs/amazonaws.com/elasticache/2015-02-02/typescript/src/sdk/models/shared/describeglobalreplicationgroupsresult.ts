import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalReplicationGroupList } from "./globalreplicationgrouplist";



export class DescribeGlobalReplicationGroupsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GlobalReplicationGroupList })
  globalReplicationGroups?: GlobalReplicationGroupList[];

  @SpeakeasyMetadata()
  marker?: string;
}
