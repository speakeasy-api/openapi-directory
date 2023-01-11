package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SnowflakeConnectorProfileProperties
 *  The connector-specific profile properties required when using Snowflake. 
**/
public class SnowflakeConnectorProfileProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountName")
    public String accountName;
    public SnowflakeConnectorProfileProperties withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonProperty("bucketName")
    public String bucketName;
    public SnowflakeConnectorProfileProperties withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketPrefix")
    public String bucketPrefix;
    public SnowflakeConnectorProfileProperties withBucketPrefix(String bucketPrefix) {
        this.bucketPrefix = bucketPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateLinkServiceName")
    public String privateLinkServiceName;
    public SnowflakeConnectorProfileProperties withPrivateLinkServiceName(String privateLinkServiceName) {
        this.privateLinkServiceName = privateLinkServiceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public SnowflakeConnectorProfileProperties withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonProperty("stage")
    public String stage;
    public SnowflakeConnectorProfileProperties withStage(String stage) {
        this.stage = stage;
        return this;
    }
    @JsonProperty("warehouse")
    public String warehouse;
    public SnowflakeConnectorProfileProperties withWarehouse(String warehouse) {
        this.warehouse = warehouse;
        return this;
    }
}