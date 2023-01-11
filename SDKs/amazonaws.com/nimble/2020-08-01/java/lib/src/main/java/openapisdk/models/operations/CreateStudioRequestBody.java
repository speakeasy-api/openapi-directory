package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateStudioRequestBody {
    @JsonProperty("adminRoleArn")
    public String adminRoleArn;
    public CreateStudioRequestBody withAdminRoleArn(String adminRoleArn) {
        this.adminRoleArn = adminRoleArn;
        return this;
    }
    @JsonProperty("displayName")
    public String displayName;
    public CreateStudioRequestBody withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("studioEncryptionConfiguration")
    public CreateStudioRequestBodyStudioEncryptionConfiguration studioEncryptionConfiguration;
    public CreateStudioRequestBody withStudioEncryptionConfiguration(CreateStudioRequestBodyStudioEncryptionConfiguration studioEncryptionConfiguration) {
        this.studioEncryptionConfiguration = studioEncryptionConfiguration;
        return this;
    }
    @JsonProperty("studioName")
    public String studioName;
    public CreateStudioRequestBody withStudioName(String studioName) {
        this.studioName = studioName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateStudioRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("userRoleArn")
    public String userRoleArn;
    public CreateStudioRequestBody withUserRoleArn(String userRoleArn) {
        this.userRoleArn = userRoleArn;
        return this;
    }
}