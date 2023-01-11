package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePortalRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarms")
    public UpdatePortalRequestBodyAlarms alarms;
    public UpdatePortalRequestBody withAlarms(UpdatePortalRequestBodyAlarms alarms) {
        this.alarms = alarms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdatePortalRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationSenderEmail")
    public String notificationSenderEmail;
    public UpdatePortalRequestBody withNotificationSenderEmail(String notificationSenderEmail) {
        this.notificationSenderEmail = notificationSenderEmail;
        return this;
    }
    @JsonProperty("portalContactEmail")
    public String portalContactEmail;
    public UpdatePortalRequestBody withPortalContactEmail(String portalContactEmail) {
        this.portalContactEmail = portalContactEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portalDescription")
    public String portalDescription;
    public UpdatePortalRequestBody withPortalDescription(String portalDescription) {
        this.portalDescription = portalDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portalLogoImage")
    public UpdatePortalRequestBodyPortalLogoImage portalLogoImage;
    public UpdatePortalRequestBody withPortalLogoImage(UpdatePortalRequestBodyPortalLogoImage portalLogoImage) {
        this.portalLogoImage = portalLogoImage;
        return this;
    }
    @JsonProperty("portalName")
    public String portalName;
    public UpdatePortalRequestBody withPortalName(String portalName) {
        this.portalName = portalName;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public UpdatePortalRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}