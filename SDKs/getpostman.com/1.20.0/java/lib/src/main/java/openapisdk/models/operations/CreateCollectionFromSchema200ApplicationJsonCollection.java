package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCollectionFromSchema200ApplicationJsonCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CreateCollectionFromSchema200ApplicationJsonCollection withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public CreateCollectionFromSchema200ApplicationJsonCollection withUid(String uid) {
        this.uid = uid;
        return this;
    }
}