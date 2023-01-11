import { SpeakeasyBase } from "../../../internal/utils";
import { CacheBehaviorList } from "./cachebehaviorlist";
/**
 * A complex type that contains zero or more <code>CacheBehavior</code> elements.
**/
export declare class CacheBehaviors extends SpeakeasyBase {
    items?: CacheBehaviorList[];
    quantity: number;
}
