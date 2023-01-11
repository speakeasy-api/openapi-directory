package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListGrantsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GrantId")
    public String grantId;
    public ListGrantsRequest withGrantId(String grantId) {
        this.grantId = grantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GranteePrincipal")
    public String granteePrincipal;
    public ListGrantsRequest withGranteePrincipal(String granteePrincipal) {
        this.granteePrincipal = granteePrincipal;
        return this;
    }
    @JsonProperty("KeyId")
    public String keyId;
    public ListGrantsRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public ListGrantsRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public ListGrantsRequest withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}