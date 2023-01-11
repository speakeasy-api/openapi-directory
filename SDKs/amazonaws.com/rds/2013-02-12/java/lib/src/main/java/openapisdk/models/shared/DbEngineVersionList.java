package openapisdk.models.shared;



public class DbEngineVersionList {
    public String dbEngineDescription;
    public DbEngineVersionList withDbEngineDescription(String dbEngineDescription) {
        this.dbEngineDescription = dbEngineDescription;
        return this;
    }
    public String dbEngineVersionDescription;
    public DbEngineVersionList withDbEngineVersionDescription(String dbEngineVersionDescription) {
        this.dbEngineVersionDescription = dbEngineVersionDescription;
        return this;
    }
    public String dbParameterGroupFamily;
    public DbEngineVersionList withDbParameterGroupFamily(String dbParameterGroupFamily) {
        this.dbParameterGroupFamily = dbParameterGroupFamily;
        return this;
    }
    public CharacterSet defaultCharacterSet;
    public DbEngineVersionList withDefaultCharacterSet(CharacterSet defaultCharacterSet) {
        this.defaultCharacterSet = defaultCharacterSet;
        return this;
    }
    public String engine;
    public DbEngineVersionList withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    public String engineVersion;
    public DbEngineVersionList withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public SupportedCharacterSetsList[] supportedCharacterSets;
    public DbEngineVersionList withSupportedCharacterSets(SupportedCharacterSetsList[] supportedCharacterSets) {
        this.supportedCharacterSets = supportedCharacterSets;
        return this;
    }
}