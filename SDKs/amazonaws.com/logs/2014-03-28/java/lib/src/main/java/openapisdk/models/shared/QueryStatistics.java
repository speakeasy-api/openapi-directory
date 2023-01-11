package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryStatistics
 * Contains the number of log events scanned by the query, the number of log events that matched the query criteria, and the total number of bytes in the log events that were scanned.
**/
public class QueryStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bytesScanned")
    public Double bytesScanned;
    public QueryStatistics withBytesScanned(Double bytesScanned) {
        this.bytesScanned = bytesScanned;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordsMatched")
    public Double recordsMatched;
    public QueryStatistics withRecordsMatched(Double recordsMatched) {
        this.recordsMatched = recordsMatched;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordsScanned")
    public Double recordsScanned;
    public QueryStatistics withRecordsScanned(Double recordsScanned) {
        this.recordsScanned = recordsScanned;
        return this;
    }
}