import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DrivesFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=group_id" })
  groupId?: string;
}
