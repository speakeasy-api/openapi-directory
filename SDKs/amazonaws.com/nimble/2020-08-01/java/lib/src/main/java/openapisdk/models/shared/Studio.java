package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Studio {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminRoleArn")
    public String adminRoleArn;
    public Studio withAdminRoleArn(String adminRoleArn) {
        this.adminRoleArn = adminRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public Studio withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public Studio withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Studio withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeRegion")
    public String homeRegion;
    public Studio withHomeRegion(String homeRegion) {
        this.homeRegion = homeRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssoClientId")
    public String ssoClientId;
    public Studio withSsoClientId(String ssoClientId) {
        this.ssoClientId = ssoClientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public StudioStateEnum state;
    public Studio withState(StudioStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusCode")
    public StudioStatusCodeEnum statusCode;
    public Studio withStatusCode(StudioStatusCodeEnum statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusMessage")
    public String statusMessage;
    public Studio withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("studioEncryptionConfiguration")
    public StudioEncryptionConfiguration studioEncryptionConfiguration;
    public Studio withStudioEncryptionConfiguration(StudioEncryptionConfiguration studioEncryptionConfiguration) {
        this.studioEncryptionConfiguration = studioEncryptionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("studioId")
    public String studioId;
    public Studio withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("studioName")
    public String studioName;
    public Studio withStudioName(String studioName) {
        this.studioName = studioName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("studioUrl")
    public String studioUrl;
    public Studio withStudioUrl(String studioUrl) {
        this.studioUrl = studioUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public Studio withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public Studio withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userRoleArn")
    public String userRoleArn;
    public Studio withUserRoleArn(String userRoleArn) {
        this.userRoleArn = userRoleArn;
        return this;
    }
}