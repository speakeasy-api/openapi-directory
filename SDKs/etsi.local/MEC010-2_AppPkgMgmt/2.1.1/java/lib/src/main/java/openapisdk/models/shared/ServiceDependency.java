package openapisdk.models.shared;



public class ServiceDependency {
    public String[] requestedPermissions;
    public ServiceDependency withRequestedPermissions(String[] requestedPermissions) {
        this.requestedPermissions = requestedPermissions;
        return this;
    }
    public Object serCategory;
    public ServiceDependency withSerCategory(Object serCategory) {
        this.serCategory = serCategory;
        return this;
    }
    public String serName;
    public ServiceDependency withSerName(String serName) {
        this.serName = serName;
        return this;
    }
    public TransportDependency[] serTransportDependencies;
    public ServiceDependency withSerTransportDependencies(TransportDependency[] serTransportDependencies) {
        this.serTransportDependencies = serTransportDependencies;
        return this;
    }
    public String version;
    public ServiceDependency withVersion(String version) {
        this.version = version;
        return this;
    }
}