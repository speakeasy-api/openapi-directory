import { SpeakeasyBase } from "../../../internal/utils";
import { LinksDeleteRuleLink } from "./linksdeleterulelink";
import { LinksDisableRuleLink } from "./linksdisablerulelink";
import { LinksEnableRuleLink } from "./linksenablerulelink";
import { LinksMoveDownRuleLink } from "./linksmovedownrulelink";
import { LinksMoveUpRuleLink } from "./linksmoveuprulelink";
import { LinksGetReportFilterLink } from "./linksgetreportfilterlink";
import { LinksRunRuleLink } from "./linksrunrulelink";
import { LinksGetRuleLink } from "./linksgetrulelink";
import { LinksUpdateRuleLink } from "./linksupdaterulelink";
/**
 * Links to retrieve/action on other entities
**/
export declare class RuleLinks extends SpeakeasyBase {
    delete?: LinksDeleteRuleLink;
    disable?: LinksDisableRuleLink;
    enable?: LinksEnableRuleLink;
    movedown?: LinksMoveDownRuleLink;
    moveup?: LinksMoveUpRuleLink;
    reportFilter?: LinksGetReportFilterLink;
    run?: LinksRunRuleLink;
    self: LinksGetRuleLink;
    update?: LinksUpdateRuleLink;
}
