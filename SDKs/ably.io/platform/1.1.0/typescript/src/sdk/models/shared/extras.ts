import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Push } from "./push";



// Extras
/** 
 * Extras object. Currently only allows for [push](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example) extra.
**/
export class Extras extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=push" })
  push?: Push;
}
