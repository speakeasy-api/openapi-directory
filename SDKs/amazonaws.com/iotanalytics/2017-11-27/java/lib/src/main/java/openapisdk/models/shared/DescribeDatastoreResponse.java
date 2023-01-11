package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDatastoreResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datastore")
    public Datastore datastore;
    public DescribeDatastoreResponse withDatastore(Datastore datastore) {
        this.datastore = datastore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statistics")
    public DatastoreStatistics statistics;
    public DescribeDatastoreResponse withStatistics(DatastoreStatistics statistics) {
        this.statistics = statistics;
        return this;
    }
}