package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PrivateLinkCreator {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires_date")
    public String expiresDate;
    public PrivateLinkCreator withExpiresDate(String expiresDate) {
        this.expiresDate = expiresDate;
        return this;
    }
}