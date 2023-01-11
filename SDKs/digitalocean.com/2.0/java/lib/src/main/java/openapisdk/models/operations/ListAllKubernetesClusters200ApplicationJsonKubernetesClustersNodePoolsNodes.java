package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droplet_id")
    public String dropletId;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes withDropletId(String dropletId) {
        this.dropletId = dropletId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus status;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes withStatus(ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodes withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}