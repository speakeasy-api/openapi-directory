package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateCodeSigningConfigRequestBodyAllowedPublishers
 * List of signing profiles that can sign a code package. 
**/
public class UpdateCodeSigningConfigRequestBodyAllowedPublishers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SigningProfileVersionArns")
    public String[] signingProfileVersionArns;
    public UpdateCodeSigningConfigRequestBodyAllowedPublishers withSigningProfileVersionArns(String[] signingProfileVersionArns) {
        this.signingProfileVersionArns = signingProfileVersionArns;
        return this;
    }
}