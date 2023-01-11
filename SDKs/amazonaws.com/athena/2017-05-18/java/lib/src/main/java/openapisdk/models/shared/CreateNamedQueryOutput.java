package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNamedQueryOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NamedQueryId")
    public String namedQueryId;
    public CreateNamedQueryOutput withNamedQueryId(String namedQueryId) {
        this.namedQueryId = namedQueryId;
        return this;
    }
}