package openapisdk.models.shared;



/**
 * DbInstanceMessage
 *  Contains the result of a successful invocation of the <code>DescribeDBInstances</code> action. 
**/
public class DbInstanceMessage {
    public DbInstanceList[] dbInstances;
    public DbInstanceMessage withDbInstances(DbInstanceList[] dbInstances) {
        this.dbInstances = dbInstances;
        return this;
    }
    public String marker;
    public DbInstanceMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}