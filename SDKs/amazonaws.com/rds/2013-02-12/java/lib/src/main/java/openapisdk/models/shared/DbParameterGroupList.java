package openapisdk.models.shared;



public class DbParameterGroupList {
    public String dbParameterGroupFamily;
    public DbParameterGroupList withDbParameterGroupFamily(String dbParameterGroupFamily) {
        this.dbParameterGroupFamily = dbParameterGroupFamily;
        return this;
    }
    public String dbParameterGroupName;
    public DbParameterGroupList withDbParameterGroupName(String dbParameterGroupName) {
        this.dbParameterGroupName = dbParameterGroupName;
        return this;
    }
    public String description;
    public DbParameterGroupList withDescription(String description) {
        this.description = description;
        return this;
    }
}