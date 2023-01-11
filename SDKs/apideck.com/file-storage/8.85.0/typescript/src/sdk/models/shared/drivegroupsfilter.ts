import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DriveGroupsFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=parent_group_id" })
  parentGroupId?: string;
}
