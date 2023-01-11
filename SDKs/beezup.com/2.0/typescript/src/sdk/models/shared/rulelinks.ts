import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksDeleteRuleLink } from "./linksdeleterulelink";
import { LinksDisableRuleLink } from "./linksdisablerulelink";
import { LinksEnableRuleLink } from "./linksenablerulelink";
import { LinksMoveDownRuleLink } from "./linksmovedownrulelink";
import { LinksMoveUpRuleLink } from "./linksmoveuprulelink";
import { LinksGetReportFilterLink } from "./linksgetreportfilterlink";
import { LinksRunRuleLink } from "./linksrunrulelink";
import { LinksGetRuleLink } from "./linksgetrulelink";
import { LinksUpdateRuleLink } from "./linksupdaterulelink";



// RuleLinks
/** 
 * Links to retrieve/action on other entities
**/
export class RuleLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: LinksDeleteRuleLink;

  @SpeakeasyMetadata({ data: "json, name=disable" })
  disable?: LinksDisableRuleLink;

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: LinksEnableRuleLink;

  @SpeakeasyMetadata({ data: "json, name=movedown" })
  movedown?: LinksMoveDownRuleLink;

  @SpeakeasyMetadata({ data: "json, name=moveup" })
  moveup?: LinksMoveUpRuleLink;

  @SpeakeasyMetadata({ data: "json, name=reportFilter" })
  reportFilter?: LinksGetReportFilterLink;

  @SpeakeasyMetadata({ data: "json, name=run" })
  run?: LinksRunRuleLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetRuleLink;

  @SpeakeasyMetadata({ data: "json, name=update" })
  update?: LinksUpdateRuleLink;
}
