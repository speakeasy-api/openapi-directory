import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExclusionFilter
/** 
 * The exclusion filter
**/
export class ExclusionFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelColumnId" })
  channelColumnId: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=groupId" })
  groupId: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=operatorName" })
  operatorName: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position: number;

  @SpeakeasyMetadata({ data: "json, name=positionInGroup" })
  positionInGroup: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
