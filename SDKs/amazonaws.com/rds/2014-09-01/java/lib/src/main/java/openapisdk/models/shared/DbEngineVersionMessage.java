package openapisdk.models.shared;



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