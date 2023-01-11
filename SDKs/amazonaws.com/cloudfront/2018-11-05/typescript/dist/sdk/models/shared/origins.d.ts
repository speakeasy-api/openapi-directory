import { SpeakeasyBase } from "../../../internal/utils";
import { OriginList } from "./originlist";
/**
 * A complex type that contains information about origins and origin groups for this distribution.
**/
export declare class Origins extends SpeakeasyBase {
    items: OriginList[];
    quantity: number;
}
