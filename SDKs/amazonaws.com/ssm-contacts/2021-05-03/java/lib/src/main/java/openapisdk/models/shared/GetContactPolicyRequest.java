package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetContactPolicyRequest {
    @JsonProperty("ContactArn")
    public String contactArn;
    public GetContactPolicyRequest withContactArn(String contactArn) {
        this.contactArn = contactArn;
        return this;
    }
}