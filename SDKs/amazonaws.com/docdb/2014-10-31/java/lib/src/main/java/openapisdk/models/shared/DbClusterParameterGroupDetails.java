package openapisdk.models.shared;



/**
 * DbClusterParameterGroupDetails
 * Represents the output of <a>DBClusterParameterGroup</a>.
**/
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