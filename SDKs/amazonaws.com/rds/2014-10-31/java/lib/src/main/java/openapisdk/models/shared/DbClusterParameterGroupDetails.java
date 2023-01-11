package openapisdk.models.shared;



/**
 * DbClusterParameterGroupDetails
 * Provides details about a DB cluster parameter group including the parameters in the DB cluster parameter group.
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