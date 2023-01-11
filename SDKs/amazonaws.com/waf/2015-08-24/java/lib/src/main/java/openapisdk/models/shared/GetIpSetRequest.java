package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetIpSetRequest {
    @JsonProperty("IPSetId")
    public String ipSetId;
    public GetIpSetRequest withIpSetId(String ipSetId) {
        this.ipSetId = ipSetId;
        return this;
    }
}