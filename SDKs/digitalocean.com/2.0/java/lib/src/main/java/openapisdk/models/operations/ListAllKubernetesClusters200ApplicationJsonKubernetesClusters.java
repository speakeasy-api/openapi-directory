package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ListAllKubernetesClusters200ApplicationJsonKubernetesClusters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_upgrade")
    public Boolean autoUpgrade;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClusters withAutoUpgrade(Boolean autoUpgrade) {
        this.autoUpgrade = autoUpgrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster_subnet")
    public String clusterSubnet;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClusters withClusterSubnet(String clusterSubnet) {
        this.clusterSubnet = clusterSubnet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClusters withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoint")
    public String endpoint;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClusters withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClusters withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipv4")
    public String ipv4;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClusters withIpv4(String ipv4) {
        this.ipv4 = ipv4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintenance_policy")
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy maintenancePolicy;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClusters withMaintenancePolicy(ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy maintenancePolicy) {
        this.maintenancePolicy = maintenancePolicy;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClusters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("node_pools")
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools[] nodePools;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClusters withNodePools(ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePools[] nodePools) {
        this.nodePools = nodePools;
        return this;
    }
    @JsonProperty("region")
    public String region;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClusters withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registry_enabled")
    public Boolean registryEnabled;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClusters withRegistryEnabled(Boolean registryEnabled) {
        this.registryEnabled = registryEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_subnet")
    public String serviceSubnet;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClusters withServiceSubnet(String serviceSubnet) {
        this.serviceSubnet = serviceSubnet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus status;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClusters withStatus(ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("surge_upgrade")
    public Boolean surgeUpgrade;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClusters withSurgeUpgrade(Boolean surgeUpgrade) {
        this.surgeUpgrade = surgeUpgrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClusters withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClusters withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClusters withVersion(String version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpc_uuid")
    public String vpcUuid;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClusters withVpcUuid(String vpcUuid) {
        this.vpcUuid = vpcUuid;
        return this;
    }
}