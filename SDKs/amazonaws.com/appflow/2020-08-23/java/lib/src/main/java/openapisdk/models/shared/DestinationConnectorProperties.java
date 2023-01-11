package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DestinationConnectorProperties
 *  This stores the information that is required to query a particular connector. 
**/
public class DestinationConnectorProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomerProfiles")
    public CustomerProfilesDestinationProperties customerProfiles;
    public DestinationConnectorProperties withCustomerProfiles(CustomerProfilesDestinationProperties customerProfiles) {
        this.customerProfiles = customerProfiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventBridge")
    public EventBridgeDestinationProperties eventBridge;
    public DestinationConnectorProperties withEventBridge(EventBridgeDestinationProperties eventBridge) {
        this.eventBridge = eventBridge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Honeycode")
    public HoneycodeDestinationProperties honeycode;
    public DestinationConnectorProperties withHoneycode(HoneycodeDestinationProperties honeycode) {
        this.honeycode = honeycode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LookoutMetrics")
    public java.util.Map<String, Object> lookoutMetrics;
    public DestinationConnectorProperties withLookoutMetrics(java.util.Map<String, Object> lookoutMetrics) {
        this.lookoutMetrics = lookoutMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Redshift")
    public RedshiftDestinationProperties redshift;
    public DestinationConnectorProperties withRedshift(RedshiftDestinationProperties redshift) {
        this.redshift = redshift;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3")
    public S3DestinationProperties s3;
    public DestinationConnectorProperties withS3(S3DestinationProperties s3) {
        this.s3 = s3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Salesforce")
    public SalesforceDestinationProperties salesforce;
    public DestinationConnectorProperties withSalesforce(SalesforceDestinationProperties salesforce) {
        this.salesforce = salesforce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Snowflake")
    public SnowflakeDestinationProperties snowflake;
    public DestinationConnectorProperties withSnowflake(SnowflakeDestinationProperties snowflake) {
        this.snowflake = snowflake;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Upsolver")
    public UpsolverDestinationProperties upsolver;
    public DestinationConnectorProperties withUpsolver(UpsolverDestinationProperties upsolver) {
        this.upsolver = upsolver;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Zendesk")
    public ZendeskDestinationProperties zendesk;
    public DestinationConnectorProperties withZendesk(ZendeskDestinationProperties zendesk) {
        this.zendesk = zendesk;
        return this;
    }
}