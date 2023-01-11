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
 * MobileDeviceAccessRule
 * A rule that controls access to mobile devices for an Amazon WorkMail group.
**/
public class MobileDeviceAccessRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DateCreated")
    public OffsetDateTime dateCreated;
    public MobileDeviceAccessRule withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DateModified")
    public OffsetDateTime dateModified;
    public MobileDeviceAccessRule withDateModified(OffsetDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public MobileDeviceAccessRule withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceModels")
    public String[] deviceModels;
    public MobileDeviceAccessRule withDeviceModels(String[] deviceModels) {
        this.deviceModels = deviceModels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceOperatingSystems")
    public String[] deviceOperatingSystems;
    public MobileDeviceAccessRule withDeviceOperatingSystems(String[] deviceOperatingSystems) {
        this.deviceOperatingSystems = deviceOperatingSystems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceTypes")
    public String[] deviceTypes;
    public MobileDeviceAccessRule withDeviceTypes(String[] deviceTypes) {
        this.deviceTypes = deviceTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceUserAgents")
    public String[] deviceUserAgents;
    public MobileDeviceAccessRule withDeviceUserAgents(String[] deviceUserAgents) {
        this.deviceUserAgents = deviceUserAgents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Effect")
    public MobileDeviceAccessRuleEffectEnum effect;
    public MobileDeviceAccessRule withEffect(MobileDeviceAccessRuleEffectEnum effect) {
        this.effect = effect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MobileDeviceAccessRuleId")
    public String mobileDeviceAccessRuleId;
    public MobileDeviceAccessRule withMobileDeviceAccessRuleId(String mobileDeviceAccessRuleId) {
        this.mobileDeviceAccessRuleId = mobileDeviceAccessRuleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public MobileDeviceAccessRule withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotDeviceModels")
    public String[] notDeviceModels;
    public MobileDeviceAccessRule withNotDeviceModels(String[] notDeviceModels) {
        this.notDeviceModels = notDeviceModels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotDeviceOperatingSystems")
    public String[] notDeviceOperatingSystems;
    public MobileDeviceAccessRule withNotDeviceOperatingSystems(String[] notDeviceOperatingSystems) {
        this.notDeviceOperatingSystems = notDeviceOperatingSystems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotDeviceTypes")
    public String[] notDeviceTypes;
    public MobileDeviceAccessRule withNotDeviceTypes(String[] notDeviceTypes) {
        this.notDeviceTypes = notDeviceTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotDeviceUserAgents")
    public String[] notDeviceUserAgents;
    public MobileDeviceAccessRule withNotDeviceUserAgents(String[] notDeviceUserAgents) {
        this.notDeviceUserAgents = notDeviceUserAgents;
        return this;
    }
}