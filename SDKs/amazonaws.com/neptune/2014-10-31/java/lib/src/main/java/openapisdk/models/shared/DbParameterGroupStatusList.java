package openapisdk.models.shared;



/**
 * DbParameterGroupStatusList
 * <p>The status of the DB parameter group.</p> <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>CreateDBInstance</a> </p> </li> <li> <p> <a>DeleteDBInstance</a> </p> </li> <li> <p> <a>ModifyDBInstance</a> </p> </li> <li> <p> <a>RebootDBInstance</a> </p> </li> </ul>
**/
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