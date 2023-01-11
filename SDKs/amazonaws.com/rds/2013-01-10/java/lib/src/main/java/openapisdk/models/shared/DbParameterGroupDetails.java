package openapisdk.models.shared;



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