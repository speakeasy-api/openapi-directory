package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAddonRequestBody {
    @JsonProperty("addonName")
    public String addonName;
    public CreateAddonRequestBody withAddonName(String addonName) {
        this.addonName = addonName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addonVersion")
    public String addonVersion;
    public CreateAddonRequestBody withAddonVersion(String addonVersion) {
        this.addonVersion = addonVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public CreateAddonRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolveConflicts")
    public CreateAddonRequestBodyResolveConflictsEnum resolveConflicts;
    public CreateAddonRequestBody withResolveConflicts(CreateAddonRequestBodyResolveConflictsEnum resolveConflicts) {
        this.resolveConflicts = resolveConflicts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccountRoleArn")
    public String serviceAccountRoleArn;
    public CreateAddonRequestBody withServiceAccountRoleArn(String serviceAccountRoleArn) {
        this.serviceAccountRoleArn = serviceAccountRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateAddonRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}