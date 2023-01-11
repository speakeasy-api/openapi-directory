package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetWebAclResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WebACL")
    public WebAcl webACL;
    public GetWebAclResponse withWebAcl(WebAcl webACL) {
        this.webACL = webACL;
        return this;
    }
}