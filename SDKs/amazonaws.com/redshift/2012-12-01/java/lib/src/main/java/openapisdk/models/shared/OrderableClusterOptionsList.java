package openapisdk.models.shared;



/**
 * OrderableClusterOptionsList
 * Describes an orderable cluster option.
**/
public class OrderableClusterOptionsList {
    public AvailabilityZoneList[] availabilityZones;
    public OrderableClusterOptionsList withAvailabilityZones(AvailabilityZoneList[] availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
    public String clusterType;
    public OrderableClusterOptionsList withClusterType(String clusterType) {
        this.clusterType = clusterType;
        return this;
    }
    public String clusterVersion;
    public OrderableClusterOptionsList withClusterVersion(String clusterVersion) {
        this.clusterVersion = clusterVersion;
        return this;
    }
    public String nodeType;
    public OrderableClusterOptionsList withNodeType(String nodeType) {
        this.nodeType = nodeType;
        return this;
    }
}