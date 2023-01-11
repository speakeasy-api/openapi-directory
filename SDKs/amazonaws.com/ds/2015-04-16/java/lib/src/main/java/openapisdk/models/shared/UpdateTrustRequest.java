package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateTrustRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SelectiveAuth")
    public SelectiveAuthEnum selectiveAuth;
    public UpdateTrustRequest withSelectiveAuth(SelectiveAuthEnum selectiveAuth) {
        this.selectiveAuth = selectiveAuth;
        return this;
    }
    @JsonProperty("TrustId")
    public String trustId;
    public UpdateTrustRequest withTrustId(String trustId) {
        this.trustId = trustId;
        return this;
    }
}