package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePortalRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarms")
    public CreatePortalRequestBodyAlarms alarms;
    public CreatePortalRequestBody withAlarms(CreatePortalRequestBodyAlarms alarms) {
        this.alarms = alarms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreatePortalRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationSenderEmail")
    public String notificationSenderEmail;
    public CreatePortalRequestBody withNotificationSenderEmail(String notificationSenderEmail) {
        this.notificationSenderEmail = notificationSenderEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portalAuthMode")
    public CreatePortalRequestBodyPortalAuthModeEnum portalAuthMode;
    public CreatePortalRequestBody withPortalAuthMode(CreatePortalRequestBodyPortalAuthModeEnum portalAuthMode) {
        this.portalAuthMode = portalAuthMode;
        return this;
    }
    @JsonProperty("portalContactEmail")
    public String portalContactEmail;
    public CreatePortalRequestBody withPortalContactEmail(String portalContactEmail) {
        this.portalContactEmail = portalContactEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portalDescription")
    public String portalDescription;
    public CreatePortalRequestBody withPortalDescription(String portalDescription) {
        this.portalDescription = portalDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portalLogoImageFile")
    public CreatePortalRequestBodyPortalLogoImageFile portalLogoImageFile;
    public CreatePortalRequestBody withPortalLogoImageFile(CreatePortalRequestBodyPortalLogoImageFile portalLogoImageFile) {
        this.portalLogoImageFile = portalLogoImageFile;
        return this;
    }
    @JsonProperty("portalName")
    public String portalName;
    public CreatePortalRequestBody withPortalName(String portalName) {
        this.portalName = portalName;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public CreatePortalRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreatePortalRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}