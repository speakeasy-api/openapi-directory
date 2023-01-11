package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IssuerResponse {
    @JsonProperty("issuers")
    public Object[] issuers;
    public IssuerResponse withIssuers(Object[] issuers) {
        this.issuers = issuers;
        return this;
    }
}