package openapisdk.models.shared;



/**
 * DbParameterGroupNameMessage
 *  Contains the result of a successful invocation of the <code>ModifyDBParameterGroup</code> or <code>ResetDBParameterGroup</code> action. 
**/
public class DbParameterGroupNameMessage {
    public String dbParameterGroupName;
    public DbParameterGroupNameMessage withDbParameterGroupName(String dbParameterGroupName) {
        this.dbParameterGroupName = dbParameterGroupName;
        return this;
    }
}