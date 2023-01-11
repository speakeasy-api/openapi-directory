package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetWebAclForResourceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WebACLSummary")
    public WebAclSummary webACLSummary;
    public GetWebAclForResourceResponse withWebAclSummary(WebAclSummary webACLSummary) {
        this.webACLSummary = webACLSummary;
        return this;
    }
}