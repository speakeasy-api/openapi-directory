package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CollectionPrivateLinkCreator {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires_date")
    public String expiresDate;
    public CollectionPrivateLinkCreator withExpiresDate(String expiresDate) {
        this.expiresDate = expiresDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("read_only")
    public Boolean readOnly;
    public CollectionPrivateLinkCreator withReadOnly(Boolean readOnly) {
        this.readOnly = readOnly;
        return this;
    }
}