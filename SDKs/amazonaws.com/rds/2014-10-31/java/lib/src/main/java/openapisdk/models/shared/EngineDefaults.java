package openapisdk.models.shared;



/**
 * EngineDefaults
 *  Contains the result of a successful invocation of the <code>DescribeEngineDefaultParameters</code> action. 
**/
public class EngineDefaults {
    public String dbParameterGroupFamily;
    public EngineDefaults withDbParameterGroupFamily(String dbParameterGroupFamily) {
        this.dbParameterGroupFamily = dbParameterGroupFamily;
        return this;
    }
    public String marker;
    public EngineDefaults withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public ParametersList[] parameters;
    public EngineDefaults withParameters(ParametersList[] parameters) {
        this.parameters = parameters;
        return this;
    }
}