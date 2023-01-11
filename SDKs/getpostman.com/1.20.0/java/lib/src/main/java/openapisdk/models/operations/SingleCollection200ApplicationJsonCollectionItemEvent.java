package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleCollection200ApplicationJsonCollectionItemEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listen")
    public String listen;
    public SingleCollection200ApplicationJsonCollectionItemEvent withListen(String listen) {
        this.listen = listen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public SingleCollection200ApplicationJsonCollectionItemEventScript script;
    public SingleCollection200ApplicationJsonCollectionItemEvent withScript(SingleCollection200ApplicationJsonCollectionItemEventScript script) {
        this.script = script;
        return this;
    }
}