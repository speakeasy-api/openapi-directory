package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateWebAclRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public UpdateWebAclRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultAction")
    public WafAction defaultAction;
    public UpdateWebAclRequest withDefaultAction(WafAction defaultAction) {
        this.defaultAction = defaultAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Updates")
    public WebAclUpdate[] updates;
    public UpdateWebAclRequest withUpdates(WebAclUpdate[] updates) {
        this.updates = updates;
        return this;
    }
    @JsonProperty("WebACLId")
    public String webACLId;
    public UpdateWebAclRequest withWebAclId(String webACLId) {
        this.webACLId = webACLId;
        return this;
    }
}