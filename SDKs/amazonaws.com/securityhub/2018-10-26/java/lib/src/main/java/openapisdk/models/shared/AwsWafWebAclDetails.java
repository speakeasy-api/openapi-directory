package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsWafWebAclDetails
 * Details about an WAF WebACL.
**/
public class AwsWafWebAclDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultAction")
    public String defaultAction;
    public AwsWafWebAclDetails withDefaultAction(String defaultAction) {
        this.defaultAction = defaultAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public AwsWafWebAclDetails withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rules")
    public AwsWafWebAclRule[] rules;
    public AwsWafWebAclDetails withRules(AwsWafWebAclRule[] rules) {
        this.rules = rules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WebAclId")
    public String webAclId;
    public AwsWafWebAclDetails withWebAclId(String webAclId) {
        this.webAclId = webAclId;
        return this;
    }
}