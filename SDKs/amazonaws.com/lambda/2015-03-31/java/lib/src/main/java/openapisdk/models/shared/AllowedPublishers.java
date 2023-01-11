package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AllowedPublishers
 * List of signing profiles that can sign a code package. 
**/
public class AllowedPublishers {
    @JsonProperty("SigningProfileVersionArns")
    public String[] signingProfileVersionArns;
    public AllowedPublishers withSigningProfileVersionArns(String[] signingProfileVersionArns) {
        this.signingProfileVersionArns = signingProfileVersionArns;
        return this;
    }
}