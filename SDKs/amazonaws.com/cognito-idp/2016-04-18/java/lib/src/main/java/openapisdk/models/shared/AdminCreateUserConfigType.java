package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdminCreateUserConfigType
 * The configuration for creating a new user profile.
**/
public class AdminCreateUserConfigType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowAdminCreateUserOnly")
    public Boolean allowAdminCreateUserOnly;
    public AdminCreateUserConfigType withAllowAdminCreateUserOnly(Boolean allowAdminCreateUserOnly) {
        this.allowAdminCreateUserOnly = allowAdminCreateUserOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InviteMessageTemplate")
    public MessageTemplateType inviteMessageTemplate;
    public AdminCreateUserConfigType withInviteMessageTemplate(MessageTemplateType inviteMessageTemplate) {
        this.inviteMessageTemplate = inviteMessageTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnusedAccountValidityDays")
    public Long unusedAccountValidityDays;
    public AdminCreateUserConfigType withUnusedAccountValidityDays(Long unusedAccountValidityDays) {
        this.unusedAccountValidityDays = unusedAccountValidityDays;
        return this;
    }
}