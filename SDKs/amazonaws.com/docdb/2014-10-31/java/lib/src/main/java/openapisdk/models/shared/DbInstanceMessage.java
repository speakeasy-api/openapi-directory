package openapisdk.models.shared;



/**
 * DbInstanceMessage
 * Represents the output of <a>DescribeDBInstances</a>.
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