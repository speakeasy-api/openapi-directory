package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportExternalApiSpecification200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collections")
    public ImportExternalApiSpecification200ApplicationJsonCollections[] collections;
    public ImportExternalApiSpecification200ApplicationJson withCollections(ImportExternalApiSpecification200ApplicationJsonCollections[] collections) {
        this.collections = collections;
        return this;
    }
}