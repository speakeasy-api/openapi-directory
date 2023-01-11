package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RedshiftDatabase
 * Describes the database details required to connect to an Amazon Redshift database.
**/
public class RedshiftDatabase {
    @JsonProperty("ClusterIdentifier")
    public String clusterIdentifier;
    public RedshiftDatabase withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public RedshiftDatabase withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
}