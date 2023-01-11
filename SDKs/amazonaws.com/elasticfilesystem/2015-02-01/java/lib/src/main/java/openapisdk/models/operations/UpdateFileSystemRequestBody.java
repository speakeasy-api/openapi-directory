package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFileSystemRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisionedThroughputInMibps")
    public Double provisionedThroughputInMibps;
    public UpdateFileSystemRequestBody withProvisionedThroughputInMibps(Double provisionedThroughputInMibps) {
        this.provisionedThroughputInMibps = provisionedThroughputInMibps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThroughputMode")
    public UpdateFileSystemRequestBodyThroughputModeEnum throughputMode;
    public UpdateFileSystemRequestBody withThroughputMode(UpdateFileSystemRequestBodyThroughputModeEnum throughputMode) {
        this.throughputMode = throughputMode;
        return this;
    }
}