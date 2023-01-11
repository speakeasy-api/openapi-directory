package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetWebAclRequest {
    @JsonProperty("WebACLId")
    public String webACLId;
    public GetWebAclRequest withWebAclId(String webACLId) {
        this.webACLId = webACLId;
        return this;
    }
}