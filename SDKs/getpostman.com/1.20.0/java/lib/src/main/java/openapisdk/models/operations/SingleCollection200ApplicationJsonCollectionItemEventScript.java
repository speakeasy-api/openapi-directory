package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleCollection200ApplicationJsonCollectionItemEventScript {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exec")
    public String exec;
    public SingleCollection200ApplicationJsonCollectionItemEventScript withExec(String exec) {
        this.exec = exec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public SingleCollection200ApplicationJsonCollectionItemEventScript withType(String type) {
        this.type = type;
        return this;
    }
}