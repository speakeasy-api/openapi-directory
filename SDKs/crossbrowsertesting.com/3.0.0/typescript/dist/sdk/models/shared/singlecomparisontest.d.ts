import { SpeakeasyBase } from "../../../internal/utils";
import { Screenshot } from "./screenshot";
import { Target } from "./target";
export declare class SingleComparisonTestBase extends SpeakeasyBase {
    screenshot?: Screenshot;
}
/**
 * An array of Configuration objects. Within each configuration is an array of browsers
 */
export declare class SingleComparisonTest extends SpeakeasyBase {
    base?: SingleComparisonTestBase;
    target?: Target;
}
