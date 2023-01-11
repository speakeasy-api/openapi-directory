package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateFhirDatastoreResponse {
    @JsonProperty("DatastoreArn")
    public String datastoreArn;
    public CreateFhirDatastoreResponse withDatastoreArn(String datastoreArn) {
        this.datastoreArn = datastoreArn;
        return this;
    }
    @JsonProperty("DatastoreEndpoint")
    public String datastoreEndpoint;
    public CreateFhirDatastoreResponse withDatastoreEndpoint(String datastoreEndpoint) {
        this.datastoreEndpoint = datastoreEndpoint;
        return this;
    }
    @JsonProperty("DatastoreId")
    public String datastoreId;
    public CreateFhirDatastoreResponse withDatastoreId(String datastoreId) {
        this.datastoreId = datastoreId;
        return this;
    }
    @JsonProperty("DatastoreStatus")
    public DatastoreStatusEnum datastoreStatus;
    public CreateFhirDatastoreResponse withDatastoreStatus(DatastoreStatusEnum datastoreStatus) {
        this.datastoreStatus = datastoreStatus;
        return this;
    }
}