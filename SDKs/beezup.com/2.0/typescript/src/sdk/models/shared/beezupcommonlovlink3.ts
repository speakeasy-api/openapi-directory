import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonHttpMethodEnum } from "./beezupcommonhttpmethodenum";



// BeezUpCommonLovLink3
/** 
 * Describe the way you have to follow to get access to the LOV
**/
export class BeezUpCommonLovLink3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: BeezUpCommonHttpMethodEnum;
}
