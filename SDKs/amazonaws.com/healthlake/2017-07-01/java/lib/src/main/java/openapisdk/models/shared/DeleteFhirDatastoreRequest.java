package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteFhirDatastoreRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatastoreId")
    public String datastoreId;
    public DeleteFhirDatastoreRequest withDatastoreId(String datastoreId) {
        this.datastoreId = datastoreId;
        return this;
    }
}