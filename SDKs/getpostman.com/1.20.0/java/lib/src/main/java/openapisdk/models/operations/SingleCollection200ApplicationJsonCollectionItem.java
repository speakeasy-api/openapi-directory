package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleCollection200ApplicationJsonCollectionItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public SingleCollection200ApplicationJsonCollectionItemEvent[] event;
    public SingleCollection200ApplicationJsonCollectionItem withEvent(SingleCollection200ApplicationJsonCollectionItemEvent[] event) {
        this.event = event;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SingleCollection200ApplicationJsonCollectionItem withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SingleCollection200ApplicationJsonCollectionItem withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request")
    public SingleCollection200ApplicationJsonCollectionItemRequest request;
    public SingleCollection200ApplicationJsonCollectionItem withRequest(SingleCollection200ApplicationJsonCollectionItemRequest request) {
        this.request = request;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public Object[] response;
    public SingleCollection200ApplicationJsonCollectionItem withResponse(Object[] response) {
        this.response = response;
        return this;
    }
}