package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportExportedData200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collections")
    public ImportExportedData200ApplicationJsonCollections[] collections;
    public ImportExportedData200ApplicationJson withCollections(ImportExportedData200ApplicationJsonCollections[] collections) {
        this.collections = collections;
        return this;
    }
}