package openapisdk.models.shared;



/**
 * DbEngineVersionList
 *  Detailed information about an engine version. 
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
    public Boolean supportsLogExportsToCloudwatchLogs;
    public DbEngineVersionList withSupportsLogExportsToCloudwatchLogs(Boolean supportsLogExportsToCloudwatchLogs) {
        this.supportsLogExportsToCloudwatchLogs = supportsLogExportsToCloudwatchLogs;
        return this;
    }
    public ValidUpgradeTargetList[] validUpgradeTarget;
    public DbEngineVersionList withValidUpgradeTarget(ValidUpgradeTargetList[] validUpgradeTarget) {
        this.validUpgradeTarget = validUpgradeTarget;
        return this;
    }
}