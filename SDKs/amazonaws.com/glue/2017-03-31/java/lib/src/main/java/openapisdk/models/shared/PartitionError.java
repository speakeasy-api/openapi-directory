package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PartitionError
 * Contains information about a partition error.
**/
public class PartitionError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorDetail")
    public ErrorDetail errorDetail;
    public PartitionError withErrorDetail(ErrorDetail errorDetail) {
        this.errorDetail = errorDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PartitionValues")
    public String[] partitionValues;
    public PartitionError withPartitionValues(String[] partitionValues) {
        this.partitionValues = partitionValues;
        return this;
    }
}