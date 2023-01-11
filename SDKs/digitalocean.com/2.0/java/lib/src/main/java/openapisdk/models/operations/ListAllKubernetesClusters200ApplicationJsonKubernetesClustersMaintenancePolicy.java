package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy
 * An object specifying the maintenance window policy for the Kubernetes cluster.
**/
public class ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("day")
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicyDayEnum day;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy withDay(ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicyDayEnum day) {
        this.day = day;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_time")
    public String startTime;
    public ListAllKubernetesClusters200ApplicationJsonKubernetesClustersMaintenancePolicy withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}