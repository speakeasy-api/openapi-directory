import { SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts } from "./rulegroupsourcestatelessrulematchattributesdestinationports";
import { RuleGroupSourceStatelessRuleMatchAttributesDestinations } from "./rulegroupsourcestatelessrulematchattributesdestinations";
import { RuleGroupSourceStatelessRuleMatchAttributesSourcePorts } from "./rulegroupsourcestatelessrulematchattributessourceports";
import { RuleGroupSourceStatelessRuleMatchAttributesSources } from "./rulegroupsourcestatelessrulematchattributessources";
import { RuleGroupSourceStatelessRuleMatchAttributesTcpFlags } from "./rulegroupsourcestatelessrulematchattributestcpflags";
/**
 * Criteria for the stateless rule.
 */
export declare class RuleGroupSourceStatelessRuleMatchAttributes extends SpeakeasyBase {
    destinationPorts?: RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts[];
    destinations?: RuleGroupSourceStatelessRuleMatchAttributesDestinations[];
    protocols?: number[];
    sourcePorts?: RuleGroupSourceStatelessRuleMatchAttributesSourcePorts[];
    sources?: RuleGroupSourceStatelessRuleMatchAttributesSources[];
    tcpFlags?: RuleGroupSourceStatelessRuleMatchAttributesTcpFlags[];
}
