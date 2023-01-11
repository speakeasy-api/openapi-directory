package openapisdk.models.shared;



/**
 * DbParameterGroupsMessage
 *  Contains the result of a successful invocation of the <code>DescribeDBParameterGroups</code> action. 
**/
public class DbParameterGroupsMessage {
    public DbParameterGroupList[] dbParameterGroups;
    public DbParameterGroupsMessage withDbParameterGroups(DbParameterGroupList[] dbParameterGroups) {
        this.dbParameterGroups = dbParameterGroups;
        return this;
    }
    public String marker;
    public DbParameterGroupsMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}