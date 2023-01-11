package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCodeSigningConfigRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowedPublishers")
    public UpdateCodeSigningConfigRequestBodyAllowedPublishers allowedPublishers;
    public UpdateCodeSigningConfigRequestBody withAllowedPublishers(UpdateCodeSigningConfigRequestBodyAllowedPublishers allowedPublishers) {
        this.allowedPublishers = allowedPublishers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeSigningPolicies")
    public UpdateCodeSigningConfigRequestBodyCodeSigningPolicies codeSigningPolicies;
    public UpdateCodeSigningConfigRequestBody withCodeSigningPolicies(UpdateCodeSigningConfigRequestBodyCodeSigningPolicies codeSigningPolicies) {
        this.codeSigningPolicies = codeSigningPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateCodeSigningConfigRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
}