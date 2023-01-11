package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RedshiftMetadata
 * Describes the <code>DataSource</code> details specific to Amazon Redshift.
**/
public class RedshiftMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatabaseUserName")
    public String databaseUserName;
    public RedshiftMetadata withDatabaseUserName(String databaseUserName) {
        this.databaseUserName = databaseUserName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RedshiftDatabase")
    public RedshiftDatabase redshiftDatabase;
    public RedshiftMetadata withRedshiftDatabase(RedshiftDatabase redshiftDatabase) {
        this.redshiftDatabase = redshiftDatabase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SelectSqlQuery")
    public String selectSqlQuery;
    public RedshiftMetadata withSelectSqlQuery(String selectSqlQuery) {
        this.selectSqlQuery = selectSqlQuery;
        return this;
    }
}