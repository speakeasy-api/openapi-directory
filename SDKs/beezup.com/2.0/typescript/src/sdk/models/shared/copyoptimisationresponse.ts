import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonChannelBasicInfo } from "./beezupcommonchannelbasicinfo";



// CopyOptimisationResponse
/** 
 * Products optimisatisation copied
**/
export class CopyOptimisationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogProductCount" })
  catalogProductCount: number;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: BeezUpCommonChannelBasicInfo;

  @SpeakeasyMetadata({ data: "json, name=enabledProductCount" })
  enabledProductCount: number;
}
