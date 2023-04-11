import { SpeakeasyBase } from "../../../internal/utils";
import { IPSet } from "./ipset";
import { PortSet } from "./portset";
/**
 * Settings that are available for use in the rules in the <a>RuleGroup</a> where this is defined.
 */
export declare class RuleVariables extends SpeakeasyBase {
    ipSets?: Record<string, IPSet>;
    portSets?: Record<string, PortSet>;
}
