package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PadUsersUsingGet200ApplicationJsonDataPadUsers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colorId")
    public String colorId;
    public PadUsersUsingGet200ApplicationJsonDataPadUsers withColorId(String colorId) {
        this.colorId = colorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PadUsersUsingGet200ApplicationJsonDataPadUsers withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PadUsersUsingGet200ApplicationJsonDataPadUsers withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public Long timestamp;
    public PadUsersUsingGet200ApplicationJsonDataPadUsers withTimestamp(Long timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}