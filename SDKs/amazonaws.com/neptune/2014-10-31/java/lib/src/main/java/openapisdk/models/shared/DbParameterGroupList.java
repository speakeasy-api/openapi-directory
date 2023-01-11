package openapisdk.models.shared;



/**
 * DbParameterGroupList
 * <p>Contains the details of an Amazon Neptune DB parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>
**/
public class DbParameterGroupList {
    public String dbParameterGroupArn;
    public DbParameterGroupList withDbParameterGroupArn(String dbParameterGroupArn) {
        this.dbParameterGroupArn = dbParameterGroupArn;
        return this;
    }
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