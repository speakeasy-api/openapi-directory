package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCodeSigningConfigRequestBody {
    @JsonProperty("AllowedPublishers")
    public CreateCodeSigningConfigRequestBodyAllowedPublishers allowedPublishers;
    public CreateCodeSigningConfigRequestBody withAllowedPublishers(CreateCodeSigningConfigRequestBodyAllowedPublishers allowedPublishers) {
        this.allowedPublishers = allowedPublishers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeSigningPolicies")
    public CreateCodeSigningConfigRequestBodyCodeSigningPolicies codeSigningPolicies;
    public CreateCodeSigningConfigRequestBody withCodeSigningPolicies(CreateCodeSigningConfigRequestBodyCodeSigningPolicies codeSigningPolicies) {
        this.codeSigningPolicies = codeSigningPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateCodeSigningConfigRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
}