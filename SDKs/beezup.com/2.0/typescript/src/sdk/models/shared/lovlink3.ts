import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpMethodEnum } from "./httpmethodenum";



// LovLink3
/** 
 * Describe the way you have to follow to get access to the LOV
**/
export class LovLink3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: HttpMethodEnum;
}
