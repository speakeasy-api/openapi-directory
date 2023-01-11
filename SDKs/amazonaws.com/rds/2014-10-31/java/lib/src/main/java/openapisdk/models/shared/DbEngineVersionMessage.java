package openapisdk.models.shared;



/**
 * DbEngineVersionMessage
 *  Contains the result of a successful invocation of the <code>DescribeDBEngineVersions</code> action. 
**/
public class DbEngineVersionMessage {
    public DbEngineVersionList[] dbEngineVersions;
    public DbEngineVersionMessage withDbEngineVersions(DbEngineVersionList[] dbEngineVersions) {
        this.dbEngineVersions = dbEngineVersions;
        return this;
    }
    public String marker;
    public DbEngineVersionMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}