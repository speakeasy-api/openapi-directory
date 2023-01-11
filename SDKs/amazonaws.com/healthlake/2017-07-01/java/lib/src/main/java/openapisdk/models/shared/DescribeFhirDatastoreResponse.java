package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeFhirDatastoreResponse {
    @JsonProperty("DatastoreProperties")
    public DatastoreProperties datastoreProperties;
    public DescribeFhirDatastoreResponse withDatastoreProperties(DatastoreProperties datastoreProperties) {
        this.datastoreProperties = datastoreProperties;
        return this;
    }
}