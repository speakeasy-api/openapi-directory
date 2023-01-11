package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OneordersPostResponses201ContentApplication1jsonSchemaParentOrder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public OneordersPostResponses201ContentApplication1jsonSchemaParentOrder withId(Long id) {
        this.id = id;
        return this;
    }
}