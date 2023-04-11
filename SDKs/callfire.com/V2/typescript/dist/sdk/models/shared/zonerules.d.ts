import { SpeakeasyBase } from "../../../internal/utils";
import { ZoneOffsetTransition } from "./zoneoffsettransition";
import { ZoneOffsetTransitionRule } from "./zoneoffsettransitionrule";
/**
 * ~
 */
export declare class ZoneRules extends SpeakeasyBase {
    /**
     * ~
     */
    fixedOffset?: boolean;
    /**
     * ~
     */
    transitionRules?: ZoneOffsetTransitionRule[];
    /**
     * ~
     */
    transitions?: ZoneOffsetTransition[];
}
