package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostDriversRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public PostDriversRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public PostDriversRequestBodyAddress address;
    public PostDriversRequestBody withAddress(PostDriversRequestBodyAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public PostDriversRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("firstname")
    public String firstname;
    public PostDriversRequestBody withFirstname(String firstname) {
        this.firstname = firstname;
        return this;
    }
    @JsonProperty("lastname")
    public String lastname;
    public PostDriversRequestBody withLastname(String lastname) {
        this.lastname = lastname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public PostDriversRequestBodyPhone phone;
    public PostDriversRequestBody withPhone(PostDriversRequestBodyPhone phone) {
        this.phone = phone;
        return this;
    }
    @JsonProperty("source")
    public PostDriversRequestBodySourceEnum source;
    public PostDriversRequestBody withSource(PostDriversRequestBodySourceEnum source) {
        this.source = source;
        return this;
    }
}