package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateContactResult {
    @JsonProperty("ContactArn")
    public String contactArn;
    public CreateContactResult withContactArn(String contactArn) {
        this.contactArn = contactArn;
        return this;
    }
}