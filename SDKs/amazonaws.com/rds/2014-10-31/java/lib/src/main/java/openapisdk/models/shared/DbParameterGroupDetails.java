package openapisdk.models.shared;



/**
 * DbParameterGroupDetails
 *  Contains the result of a successful invocation of the <code>DescribeDBParameters</code> action. 
**/
public class DbParameterGroupDetails {
    public String marker;
    public DbParameterGroupDetails withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public ParametersList[] parameters;
    public DbParameterGroupDetails withParameters(ParametersList[] parameters) {
        this.parameters = parameters;
        return this;
    }
}