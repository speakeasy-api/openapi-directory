package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribePortalResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarms")
    public Alarms alarms;
    public DescribePortalResponse withAlarms(Alarms alarms) {
        this.alarms = alarms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationSenderEmail")
    public String notificationSenderEmail;
    public DescribePortalResponse withNotificationSenderEmail(String notificationSenderEmail) {
        this.notificationSenderEmail = notificationSenderEmail;
        return this;
    }
    @JsonProperty("portalArn")
    public String portalArn;
    public DescribePortalResponse withPortalArn(String portalArn) {
        this.portalArn = portalArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portalAuthMode")
    public AuthModeEnum portalAuthMode;
    public DescribePortalResponse withPortalAuthMode(AuthModeEnum portalAuthMode) {
        this.portalAuthMode = portalAuthMode;
        return this;
    }
    @JsonProperty("portalClientId")
    public String portalClientId;
    public DescribePortalResponse withPortalClientId(String portalClientId) {
        this.portalClientId = portalClientId;
        return this;
    }
    @JsonProperty("portalContactEmail")
    public String portalContactEmail;
    public DescribePortalResponse withPortalContactEmail(String portalContactEmail) {
        this.portalContactEmail = portalContactEmail;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("portalCreationDate")
    public OffsetDateTime portalCreationDate;
    public DescribePortalResponse withPortalCreationDate(OffsetDateTime portalCreationDate) {
        this.portalCreationDate = portalCreationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portalDescription")
    public String portalDescription;
    public DescribePortalResponse withPortalDescription(String portalDescription) {
        this.portalDescription = portalDescription;
        return this;
    }
    @JsonProperty("portalId")
    public String portalId;
    public DescribePortalResponse withPortalId(String portalId) {
        this.portalId = portalId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("portalLastUpdateDate")
    public OffsetDateTime portalLastUpdateDate;
    public DescribePortalResponse withPortalLastUpdateDate(OffsetDateTime portalLastUpdateDate) {
        this.portalLastUpdateDate = portalLastUpdateDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portalLogoImageLocation")
    public ImageLocation portalLogoImageLocation;
    public DescribePortalResponse withPortalLogoImageLocation(ImageLocation portalLogoImageLocation) {
        this.portalLogoImageLocation = portalLogoImageLocation;
        return this;
    }
    @JsonProperty("portalName")
    public String portalName;
    public DescribePortalResponse withPortalName(String portalName) {
        this.portalName = portalName;
        return this;
    }
    @JsonProperty("portalStartUrl")
    public String portalStartUrl;
    public DescribePortalResponse withPortalStartUrl(String portalStartUrl) {
        this.portalStartUrl = portalStartUrl;
        return this;
    }
    @JsonProperty("portalStatus")
    public PortalStatus portalStatus;
    public DescribePortalResponse withPortalStatus(PortalStatus portalStatus) {
        this.portalStatus = portalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public DescribePortalResponse withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}