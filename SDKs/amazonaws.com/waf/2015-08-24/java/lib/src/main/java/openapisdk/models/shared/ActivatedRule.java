package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivatedRule
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>ActivatedRule</code> object in an <a>UpdateWebACL</a> request specifies a <code>Rule</code> that you want to insert or delete, the priority of the <code>Rule</code> in the <code>WebACL</code>, and the action that you want AWS WAF to take when a web request matches the <code>Rule</code> (<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>).</p> <p>To specify whether to insert or delete a <code>Rule</code>, use the <code>Action</code> parameter in the <a>WebACLUpdate</a> data type.</p>
**/
public class ActivatedRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Action")
    public WafAction action;
    public ActivatedRule withAction(WafAction action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExcludedRules")
    public ExcludedRule[] excludedRules;
    public ActivatedRule withExcludedRules(ExcludedRule[] excludedRules) {
        this.excludedRules = excludedRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OverrideAction")
    public WafOverrideAction overrideAction;
    public ActivatedRule withOverrideAction(WafOverrideAction overrideAction) {
        this.overrideAction = overrideAction;
        return this;
    }
    @JsonProperty("Priority")
    public Long priority;
    public ActivatedRule withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonProperty("RuleId")
    public String ruleId;
    public ActivatedRule withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public WafRuleTypeEnum type;
    public ActivatedRule withType(WafRuleTypeEnum type) {
        this.type = type;
        return this;
    }
}