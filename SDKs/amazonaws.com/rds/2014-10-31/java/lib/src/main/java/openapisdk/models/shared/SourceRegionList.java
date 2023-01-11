package openapisdk.models.shared;



/**
 * SourceRegionList
 * Contains an Amazon Web Services Region name as the result of a successful call to the <code>DescribeSourceRegions</code> action.
**/
public class SourceRegionList {
    public String endpoint;
    public SourceRegionList withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    public String regionName;
    public SourceRegionList withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
    public String status;
    public SourceRegionList withStatus(String status) {
        this.status = status;
        return this;
    }
    public Boolean supportsDBInstanceAutomatedBackupsReplication;
    public SourceRegionList withSupportsDbInstanceAutomatedBackupsReplication(Boolean supportsDBInstanceAutomatedBackupsReplication) {
        this.supportsDBInstanceAutomatedBackupsReplication = supportsDBInstanceAutomatedBackupsReplication;
        return this;
    }
}