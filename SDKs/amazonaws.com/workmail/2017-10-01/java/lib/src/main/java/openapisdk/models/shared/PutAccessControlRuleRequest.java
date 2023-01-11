package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutAccessControlRuleRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Actions")
    public String[] actions;
    public PutAccessControlRuleRequest withActions(String[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonProperty("Description")
    public String description;
    public PutAccessControlRuleRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("Effect")
    public AccessControlRuleEffectEnum effect;
    public PutAccessControlRuleRequest withEffect(AccessControlRuleEffectEnum effect) {
        this.effect = effect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpRanges")
    public String[] ipRanges;
    public PutAccessControlRuleRequest withIpRanges(String[] ipRanges) {
        this.ipRanges = ipRanges;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public PutAccessControlRuleRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotActions")
    public String[] notActions;
    public PutAccessControlRuleRequest withNotActions(String[] notActions) {
        this.notActions = notActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotIpRanges")
    public String[] notIpRanges;
    public PutAccessControlRuleRequest withNotIpRanges(String[] notIpRanges) {
        this.notIpRanges = notIpRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotUserIds")
    public String[] notUserIds;
    public PutAccessControlRuleRequest withNotUserIds(String[] notUserIds) {
        this.notUserIds = notUserIds;
        return this;
    }
    @JsonProperty("OrganizationId")
    public String organizationId;
    public PutAccessControlRuleRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserIds")
    public String[] userIds;
    public PutAccessControlRuleRequest withUserIds(String[] userIds) {
        this.userIds = userIds;
        return this;
    }
}