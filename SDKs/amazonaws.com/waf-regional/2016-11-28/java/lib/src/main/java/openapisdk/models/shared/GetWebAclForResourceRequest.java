package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetWebAclForResourceRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public GetWebAclForResourceRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}