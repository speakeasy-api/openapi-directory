package openapisdk.models.shared;



/**
 * DbEngineVersionList
 *  This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>. 
**/
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
    public String[] exportableLogTypes;
    public DbEngineVersionList withExportableLogTypes(String[] exportableLogTypes) {
        this.exportableLogTypes = exportableLogTypes;
        return this;
    }
    public String status;
    public DbEngineVersionList withStatus(String status) {
        this.status = status;
        return this;
    }
    public SupportedCharacterSetsList[] supportedCharacterSets;
    public DbEngineVersionList withSupportedCharacterSets(SupportedCharacterSetsList[] supportedCharacterSets) {
        this.supportedCharacterSets = supportedCharacterSets;
        return this;
    }
    public String[] supportedEngineModes;
    public DbEngineVersionList withSupportedEngineModes(String[] supportedEngineModes) {
        this.supportedEngineModes = supportedEngineModes;
        return this;
    }
    public String[] supportedFeatureNames;
    public DbEngineVersionList withSupportedFeatureNames(String[] supportedFeatureNames) {
        this.supportedFeatureNames = supportedFeatureNames;
        return this;
    }
    public SupportedCharacterSetsList[] supportedNcharCharacterSets;
    public DbEngineVersionList withSupportedNcharCharacterSets(SupportedCharacterSetsList[] supportedNcharCharacterSets) {
        this.supportedNcharCharacterSets = supportedNcharCharacterSets;
        return this;
    }
    public SupportedTimezonesList[] supportedTimezones;
    public DbEngineVersionList withSupportedTimezones(SupportedTimezonesList[] supportedTimezones) {
        this.supportedTimezones = supportedTimezones;
        return this;
    }
    public Boolean supportsGlobalDatabases;
    public DbEngineVersionList withSupportsGlobalDatabases(Boolean supportsGlobalDatabases) {
        this.supportsGlobalDatabases = supportsGlobalDatabases;
        return this;
    }
    public Boolean supportsLogExportsToCloudwatchLogs;
    public DbEngineVersionList withSupportsLogExportsToCloudwatchLogs(Boolean supportsLogExportsToCloudwatchLogs) {
        this.supportsLogExportsToCloudwatchLogs = supportsLogExportsToCloudwatchLogs;
        return this;
    }
    public Boolean supportsParallelQuery;
    public DbEngineVersionList withSupportsParallelQuery(Boolean supportsParallelQuery) {
        this.supportsParallelQuery = supportsParallelQuery;
        return this;
    }
    public Boolean supportsReadReplica;
    public DbEngineVersionList withSupportsReadReplica(Boolean supportsReadReplica) {
        this.supportsReadReplica = supportsReadReplica;
        return this;
    }
    public ValidUpgradeTargetList[] validUpgradeTarget;
    public DbEngineVersionList withValidUpgradeTarget(ValidUpgradeTargetList[] validUpgradeTarget) {
        this.validUpgradeTarget = validUpgradeTarget;
        return this;
    }
}