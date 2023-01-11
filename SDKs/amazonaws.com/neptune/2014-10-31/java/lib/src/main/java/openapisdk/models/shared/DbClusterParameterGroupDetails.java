package openapisdk.models.shared;



public class DbClusterParameterGroupDetails {
    public String marker;
    public DbClusterParameterGroupDetails withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public ParametersList[] parameters;
    public DbClusterParameterGroupDetails withParameters(ParametersList[] parameters) {
        this.parameters = parameters;
        return this;
    }
}