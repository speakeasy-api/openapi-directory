package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Qualifier
 * Defines a <code>PolicyInformation</code> qualifier. ACM Private CA supports the <a href="https://tools.ietf.org/html/rfc5280#section-4.2.1.4">certification practice statement (CPS) qualifier</a> defined in RFC 5280. 
**/
public class Qualifier {
    @JsonProperty("CpsUri")
    public String cpsUri;
    public Qualifier withCpsUri(String cpsUri) {
        this.cpsUri = cpsUri;
        return this;
    }
}