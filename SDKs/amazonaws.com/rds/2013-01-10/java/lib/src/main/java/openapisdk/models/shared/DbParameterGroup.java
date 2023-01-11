package openapisdk.models.shared;



public class DbParameterGroup {
    public String dbParameterGroupFamily;
    public DbParameterGroup withDbParameterGroupFamily(String dbParameterGroupFamily) {
        this.dbParameterGroupFamily = dbParameterGroupFamily;
        return this;
    }
    public String dbParameterGroupName;
    public DbParameterGroup withDbParameterGroupName(String dbParameterGroupName) {
        this.dbParameterGroupName = dbParameterGroupName;
        return this;
    }
    public String description;
    public DbParameterGroup withDescription(String description) {
        this.description = description;
        return this;
    }
}