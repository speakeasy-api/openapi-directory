import { SpeakeasyBase } from "../../../internal/utils";
import { Header } from "./header";
import { RuleOption } from "./ruleoption";
import { StatefulActionEnum } from "./statefulactionenum";
/**
 * A single Suricata rules specification, for use in a stateful rule group. Use this option to specify a simple Suricata rule with protocol, source and destination, ports, direction, and rule options. For information about the Suricata <code>Rules</code> format, see <a href="https://suricata.readthedocs.io/rules/intro.html#">Rules Format</a>.
 */
export declare class StatefulRule extends SpeakeasyBase {
    action: StatefulActionEnum;
    header: Header;
    ruleOptions: RuleOption[];
}
