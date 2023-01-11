package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RedshiftConnectorProfileProperties
 *  The connector-specific profile properties when using Amazon Redshift. 
**/
public class RedshiftConnectorProfileProperties {
    @JsonProperty("bucketName")
    public String bucketName;
    public RedshiftConnectorProfileProperties withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketPrefix")
    public String bucketPrefix;
    public RedshiftConnectorProfileProperties withBucketPrefix(String bucketPrefix) {
        this.bucketPrefix = bucketPrefix;
        return this;
    }
    @JsonProperty("databaseUrl")
    public String databaseUrl;
    public RedshiftConnectorProfileProperties withDatabaseUrl(String databaseUrl) {
        this.databaseUrl = databaseUrl;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public RedshiftConnectorProfileProperties withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}