package openapisdk.models.shared;



/**
 * ClusterParameterGroupDetails
 * Contains the output from the <a>DescribeClusterParameters</a> action. 
**/
public class ClusterParameterGroupDetails {
    public String marker;
    public ClusterParameterGroupDetails withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public ParametersList[] parameters;
    public ClusterParameterGroupDetails withParameters(ParametersList[] parameters) {
        this.parameters = parameters;
        return this;
    }
}