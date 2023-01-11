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
 * ServiceUpdate
 * An update that you can apply to your MemoryDB clusters.
**/
public class ServiceUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("AutoUpdateStartDate")
    public OffsetDateTime autoUpdateStartDate;
    public ServiceUpdate withAutoUpdateStartDate(OffsetDateTime autoUpdateStartDate) {
        this.autoUpdateStartDate = autoUpdateStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterName")
    public String clusterName;
    public ServiceUpdate withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public ServiceUpdate withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NodesUpdated")
    public String nodesUpdated;
    public ServiceUpdate withNodesUpdated(String nodesUpdated) {
        this.nodesUpdated = nodesUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ReleaseDate")
    public OffsetDateTime releaseDate;
    public ServiceUpdate withReleaseDate(OffsetDateTime releaseDate) {
        this.releaseDate = releaseDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceUpdateName")
    public String serviceUpdateName;
    public ServiceUpdate withServiceUpdateName(String serviceUpdateName) {
        this.serviceUpdateName = serviceUpdateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ServiceUpdateStatusEnum status;
    public ServiceUpdate withStatus(ServiceUpdateStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public ServiceUpdateTypeEnum type;
    public ServiceUpdate withType(ServiceUpdateTypeEnum type) {
        this.type = type;
        return this;
    }
}