package openapisdk.models.shared;



/**
 * DbEngineVersionMessage
 * Represents the output of <a>DescribeDBEngineVersions</a>.
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