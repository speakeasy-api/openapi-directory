package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostVerifyPasswordChangeSample {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guid")
    public String guid;
    public PostVerifyPasswordChangeSample withGuid(String guid) {
        this.guid = guid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public PostVerifyPasswordChangeSample withPassword(String password) {
        this.password = password;
        return this;
    }
}