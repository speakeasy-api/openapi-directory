package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFhirDatastoresResponse {
    @JsonProperty("DatastorePropertiesList")
    public DatastoreProperties[] datastorePropertiesList;
    public ListFhirDatastoresResponse withDatastorePropertiesList(DatastoreProperties[] datastorePropertiesList) {
        this.datastorePropertiesList = datastorePropertiesList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListFhirDatastoresResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}