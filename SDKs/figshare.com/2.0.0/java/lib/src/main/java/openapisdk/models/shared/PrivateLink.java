package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PrivateLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires_date")
    public String expiresDate;
    public PrivateLink withExpiresDate(String expiresDate) {
        this.expiresDate = expiresDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PrivateLink withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_active")
    public Boolean isActive;
    public PrivateLink withIsActive(Boolean isActive) {
        this.isActive = isActive;
        return this;
    }
}