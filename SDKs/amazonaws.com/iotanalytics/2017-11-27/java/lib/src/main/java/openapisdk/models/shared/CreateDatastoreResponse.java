package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDatastoreResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datastoreArn")
    public String datastoreArn;
    public CreateDatastoreResponse withDatastoreArn(String datastoreArn) {
        this.datastoreArn = datastoreArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datastoreName")
    public String datastoreName;
    public CreateDatastoreResponse withDatastoreName(String datastoreName) {
        this.datastoreName = datastoreName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retentionPeriod")
    public RetentionPeriod retentionPeriod;
    public CreateDatastoreResponse withRetentionPeriod(RetentionPeriod retentionPeriod) {
        this.retentionPeriod = retentionPeriod;
        return this;
    }
}