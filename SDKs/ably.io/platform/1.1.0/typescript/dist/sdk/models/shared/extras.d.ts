import { SpeakeasyBase } from "../../../internal/utils";
import { Push } from "./push";
/**
 * Extras object. Currently only allows for [push](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example) extra.
**/
export declare class Extras extends SpeakeasyBase {
    push?: Push;
}
