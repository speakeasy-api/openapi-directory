package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * AccessControlRule
 * A rule that controls access to an Amazon WorkMail organization.
**/
public class AccessControlRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Actions")
    public String[] actions;
    public AccessControlRule withActions(String[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DateCreated")
    public OffsetDateTime dateCreated;
    public AccessControlRule withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DateModified")
    public OffsetDateTime dateModified;
    public AccessControlRule withDateModified(OffsetDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public AccessControlRule withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Effect")
    public AccessControlRuleEffectEnum effect;
    public AccessControlRule withEffect(AccessControlRuleEffectEnum effect) {
        this.effect = effect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpRanges")
    public String[] ipRanges;
    public AccessControlRule withIpRanges(String[] ipRanges) {
        this.ipRanges = ipRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public AccessControlRule withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotActions")
    public String[] notActions;
    public AccessControlRule withNotActions(String[] notActions) {
        this.notActions = notActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotIpRanges")
    public String[] notIpRanges;
    public AccessControlRule withNotIpRanges(String[] notIpRanges) {
        this.notIpRanges = notIpRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotUserIds")
    public String[] notUserIds;
    public AccessControlRule withNotUserIds(String[] notUserIds) {
        this.notUserIds = notUserIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserIds")
    public String[] userIds;
    public AccessControlRule withUserIds(String[] userIds) {
        this.userIds = userIds;
        return this;
    }
}