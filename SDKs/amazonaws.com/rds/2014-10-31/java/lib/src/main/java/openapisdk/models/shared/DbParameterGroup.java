package openapisdk.models.shared;



/**
 * DbParameterGroup
 * <p>Contains the details of an Amazon RDS DB parameter group. </p> <p>This data type is used as a response element in the <code>DescribeDBParameterGroups</code> action. </p>
**/
public class DbParameterGroup {
    public String dbParameterGroupArn;
    public DbParameterGroup withDbParameterGroupArn(String dbParameterGroupArn) {
        this.dbParameterGroupArn = dbParameterGroupArn;
        return this;
    }
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