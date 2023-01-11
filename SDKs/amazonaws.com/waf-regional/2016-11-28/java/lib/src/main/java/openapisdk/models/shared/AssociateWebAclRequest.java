package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateWebAclRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public AssociateWebAclRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("WebACLId")
    public String webACLId;
    public AssociateWebAclRequest withWebAclId(String webACLId) {
        this.webACLId = webACLId;
        return this;
    }
}