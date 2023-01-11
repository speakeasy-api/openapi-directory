package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateCodeSigningConfigRequestBodyAllowedPublishers
 * List of signing profiles that can sign a code package. 
**/
public class CreateCodeSigningConfigRequestBodyAllowedPublishers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SigningProfileVersionArns")
    public String[] signingProfileVersionArns;
    public CreateCodeSigningConfigRequestBodyAllowedPublishers withSigningProfileVersionArns(String[] signingProfileVersionArns) {
        this.signingProfileVersionArns = signingProfileVersionArns;
        return this;
    }
}