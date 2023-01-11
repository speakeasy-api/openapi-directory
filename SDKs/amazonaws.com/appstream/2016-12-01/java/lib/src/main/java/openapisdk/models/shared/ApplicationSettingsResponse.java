package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplicationSettingsResponse
 * Describes the persistent application settings for users of a stack.
**/
public class ApplicationSettingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public ApplicationSettingsResponse withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BucketName")
    public String s3BucketName;
    public ApplicationSettingsResponse withS3BucketName(String s3BucketName) {
        this.s3BucketName = s3BucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SettingsGroup")
    public String settingsGroup;
    public ApplicationSettingsResponse withSettingsGroup(String settingsGroup) {
        this.settingsGroup = settingsGroup;
        return this;
    }
}