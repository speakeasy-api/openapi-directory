package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ClusterListEntry
 * Contains a cluster's state, a cluster's ID, and other important information.
**/
public class ClusterListEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterId")
    public String clusterId;
    public ClusterListEntry withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterState")
    public ClusterStateEnum clusterState;
    public ClusterListEntry withClusterState(ClusterStateEnum clusterState) {
        this.clusterState = clusterState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationDate")
    public OffsetDateTime creationDate;
    public ClusterListEntry withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public ClusterListEntry withDescription(String description) {
        this.description = description;
        return this;
    }
}