package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuleLinks
 * Links to retrieve/action on other entities
**/
public class RuleLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete")
    public LinksDeleteRuleLink delete;
    public RuleLinks withDelete(LinksDeleteRuleLink delete) {
        this.delete = delete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disable")
    public LinksDisableRuleLink disable;
    public RuleLinks withDisable(LinksDisableRuleLink disable) {
        this.disable = disable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public LinksEnableRuleLink enable;
    public RuleLinks withEnable(LinksEnableRuleLink enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("movedown")
    public LinksMoveDownRuleLink movedown;
    public RuleLinks withMovedown(LinksMoveDownRuleLink movedown) {
        this.movedown = movedown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moveup")
    public LinksMoveUpRuleLink moveup;
    public RuleLinks withMoveup(LinksMoveUpRuleLink moveup) {
        this.moveup = moveup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportFilter")
    public LinksGetReportFilterLink reportFilter;
    public RuleLinks withReportFilter(LinksGetReportFilterLink reportFilter) {
        this.reportFilter = reportFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("run")
    public LinksRunRuleLink run;
    public RuleLinks withRun(LinksRunRuleLink run) {
        this.run = run;
        return this;
    }
    @JsonProperty("self")
    public LinksGetRuleLink self;
    public RuleLinks withSelf(LinksGetRuleLink self) {
        this.self = self;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update")
    public LinksUpdateRuleLink update;
    public RuleLinks withUpdate(LinksUpdateRuleLink update) {
        this.update = update;
        return this;
    }
}