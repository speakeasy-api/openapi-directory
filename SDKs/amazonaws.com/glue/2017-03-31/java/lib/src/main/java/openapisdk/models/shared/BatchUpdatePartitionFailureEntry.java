package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUpdatePartitionFailureEntry
 * Contains information about a batch update partition error.
**/
public class BatchUpdatePartitionFailureEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorDetail")
    public ErrorDetail errorDetail;
    public BatchUpdatePartitionFailureEntry withErrorDetail(ErrorDetail errorDetail) {
        this.errorDetail = errorDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PartitionValueList")
    public String[] partitionValueList;
    public BatchUpdatePartitionFailureEntry withPartitionValueList(String[] partitionValueList) {
        this.partitionValueList = partitionValueList;
        return this;
    }
}