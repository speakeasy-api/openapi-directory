package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAuthorNameUsingPost200ApplicationJsonDataInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colorId")
    public String colorId;
    public GetAuthorNameUsingPost200ApplicationJsonDataInfo withColorId(String colorId) {
        this.colorId = colorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetAuthorNameUsingPost200ApplicationJsonDataInfo withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetAuthorNameUsingPost200ApplicationJsonDataInfo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public Long timestamp;
    public GetAuthorNameUsingPost200ApplicationJsonDataInfo withTimestamp(Long timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}