package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportExportedData200ApplicationJsonCollections {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ImportExportedData200ApplicationJsonCollections withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ImportExportedData200ApplicationJsonCollections withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public ImportExportedData200ApplicationJsonCollections withUid(String uid) {
        this.uid = uid;
        return this;
    }
}