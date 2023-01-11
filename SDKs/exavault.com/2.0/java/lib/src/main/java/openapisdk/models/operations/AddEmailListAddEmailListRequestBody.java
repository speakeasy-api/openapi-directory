package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddEmailListAddEmailListRequestBody {
    @JsonProperty("emails")
    public String[] emails;
    public AddEmailListAddEmailListRequestBody withEmails(String[] emails) {
        this.emails = emails;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AddEmailListAddEmailListRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}