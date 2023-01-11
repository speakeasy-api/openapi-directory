package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteWebAclRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public DeleteWebAclRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("WebACLId")
    public String webACLId;
    public DeleteWebAclRequest withWebAclId(String webACLId) {
        this.webACLId = webACLId;
        return this;
    }
}