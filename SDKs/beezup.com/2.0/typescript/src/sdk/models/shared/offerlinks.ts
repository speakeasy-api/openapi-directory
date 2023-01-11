import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksCreateContractLink } from "./linkscreatecontractlink";



// OfferLinks
/** 
 * The different actions you can make on this offer
**/
export class OfferLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createContract" })
  createContract?: LinksCreateContractLink;
}
