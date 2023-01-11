package openapisdk.models.shared;



public class DbParameterGroupStatusList {
    public String dbParameterGroupName;
    public DbParameterGroupStatusList withDbParameterGroupName(String dbParameterGroupName) {
        this.dbParameterGroupName = dbParameterGroupName;
        return this;
    }
    public String parameterApplyStatus;
    public DbParameterGroupStatusList withParameterApplyStatus(String parameterApplyStatus) {
        this.parameterApplyStatus = parameterApplyStatus;
        return this;
    }
}