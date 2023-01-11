package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteFhirDatastoreResponse {
    @JsonProperty("DatastoreArn")
    public String datastoreArn;
    public DeleteFhirDatastoreResponse withDatastoreArn(String datastoreArn) {
        this.datastoreArn = datastoreArn;
        return this;
    }
    @JsonProperty("DatastoreEndpoint")
    public String datastoreEndpoint;
    public DeleteFhirDatastoreResponse withDatastoreEndpoint(String datastoreEndpoint) {
        this.datastoreEndpoint = datastoreEndpoint;
        return this;
    }
    @JsonProperty("DatastoreId")
    public String datastoreId;
    public DeleteFhirDatastoreResponse withDatastoreId(String datastoreId) {
        this.datastoreId = datastoreId;
        return this;
    }
    @JsonProperty("DatastoreStatus")
    public DatastoreStatusEnum datastoreStatus;
    public DeleteFhirDatastoreResponse withDatastoreStatus(DatastoreStatusEnum datastoreStatus) {
        this.datastoreStatus = datastoreStatus;
        return this;
    }
}