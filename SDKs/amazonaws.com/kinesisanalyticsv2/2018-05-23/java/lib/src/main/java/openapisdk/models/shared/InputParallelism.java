package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputParallelism
 * For a SQL-based Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source. 
**/
public class InputParallelism {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Count")
    public Long count;
    public InputParallelism withCount(Long count) {
        this.count = count;
        return this;
    }
}