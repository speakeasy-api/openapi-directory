package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleCollection200ApplicationJsonCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public SingleCollection200ApplicationJsonCollectionInfo info;
    public SingleCollection200ApplicationJsonCollection withInfo(SingleCollection200ApplicationJsonCollectionInfo info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item")
    public SingleCollection200ApplicationJsonCollectionItem[] item;
    public SingleCollection200ApplicationJsonCollection withItem(SingleCollection200ApplicationJsonCollectionItem[] item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variables")
    public Object[] variables;
    public SingleCollection200ApplicationJsonCollection withVariables(Object[] variables) {
        this.variables = variables;
        return this;
    }
}