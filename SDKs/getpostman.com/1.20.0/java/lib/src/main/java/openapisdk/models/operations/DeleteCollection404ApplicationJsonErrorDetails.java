package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteCollection404ApplicationJsonErrorDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DeleteCollection404ApplicationJsonErrorDetails withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item")
    public String item;
    public DeleteCollection404ApplicationJsonErrorDetails withItem(String item) {
        this.item = item;
        return this;
    }
}