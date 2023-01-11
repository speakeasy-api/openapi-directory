package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeliverConfigSnapshotResponse
 * The output for the <a>DeliverConfigSnapshot</a> action, in JSON format.
**/
public class DeliverConfigSnapshotResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configSnapshotId")
    public String configSnapshotId;
    public DeliverConfigSnapshotResponse withConfigSnapshotId(String configSnapshotId) {
        this.configSnapshotId = configSnapshotId;
        return this;
    }
}