import { SpeakeasyBase } from "../../../internal/utils";
import { StatefulRuleDirectionEnum } from "./statefulruledirectionenum";
import { StatefulRuleProtocolEnum } from "./statefulruleprotocolenum";
/**
 * The basic rule criteria for Network Firewall to use to inspect packet headers in stateful traffic flow inspection. Traffic flows that match the criteria are a match for the corresponding <a>StatefulRule</a>.
 */
export declare class Header extends SpeakeasyBase {
    destination: string;
    destinationPort: string;
    direction: StatefulRuleDirectionEnum;
    protocol: StatefulRuleProtocolEnum;
    source: string;
    sourcePort: string;
}
