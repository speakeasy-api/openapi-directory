package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RdsDatabase
 * The database details of an Amazon RDS database.
**/
public class RdsDatabase {
    @JsonProperty("DatabaseName")
    public String databaseName;
    public RdsDatabase withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("InstanceIdentifier")
    public String instanceIdentifier;
    public RdsDatabase withInstanceIdentifier(String instanceIdentifier) {
        this.instanceIdentifier = instanceIdentifier;
        return this;
    }
}