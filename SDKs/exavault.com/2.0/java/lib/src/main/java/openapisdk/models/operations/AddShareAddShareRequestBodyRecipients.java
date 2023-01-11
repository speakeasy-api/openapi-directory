package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddShareAddShareRequestBodyRecipients {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public AddShareAddShareRequestBodyRecipients withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AddShareAddShareRequestBodyRecipients withType(String type) {
        this.type = type;
        return this;
    }
}