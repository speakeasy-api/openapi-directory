package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAddonRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addonVersion")
    public String addonVersion;
    public UpdateAddonRequestBody withAddonVersion(String addonVersion) {
        this.addonVersion = addonVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public UpdateAddonRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolveConflicts")
    public UpdateAddonRequestBodyResolveConflictsEnum resolveConflicts;
    public UpdateAddonRequestBody withResolveConflicts(UpdateAddonRequestBodyResolveConflictsEnum resolveConflicts) {
        this.resolveConflicts = resolveConflicts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccountRoleArn")
    public String serviceAccountRoleArn;
    public UpdateAddonRequestBody withServiceAccountRoleArn(String serviceAccountRoleArn) {
        this.serviceAccountRoleArn = serviceAccountRoleArn;
        return this;
    }
}