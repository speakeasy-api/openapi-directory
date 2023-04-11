import { SpeakeasyBase } from "../../../internal/utils";
import { OriginCustomHeadersList } from "./origincustomheaderslist";
/**
 * A complex type that contains the list of Custom Headers for each origin.
 */
export declare class CustomHeaders extends SpeakeasyBase {
    items?: OriginCustomHeadersList[];
    quantity: number;
}
