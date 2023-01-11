package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ConfigurationAggregator
 * The details about the configuration aggregator, including information about source accounts, regions, and metadata of the aggregator. 
**/
public class ConfigurationAggregator {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountAggregationSources")
    public AccountAggregationSource[] accountAggregationSources;
    public ConfigurationAggregator withAccountAggregationSources(AccountAggregationSource[] accountAggregationSources) {
        this.accountAggregationSources = accountAggregationSources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationAggregatorArn")
    public String configurationAggregatorArn;
    public ConfigurationAggregator withConfigurationAggregatorArn(String configurationAggregatorArn) {
        this.configurationAggregatorArn = configurationAggregatorArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationAggregatorName")
    public String configurationAggregatorName;
    public ConfigurationAggregator withConfigurationAggregatorName(String configurationAggregatorName) {
        this.configurationAggregatorName = configurationAggregatorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedBy")
    public String createdBy;
    public ConfigurationAggregator withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public ConfigurationAggregator withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedTime")
    public OffsetDateTime lastUpdatedTime;
    public ConfigurationAggregator withLastUpdatedTime(OffsetDateTime lastUpdatedTime) {
        this.lastUpdatedTime = lastUpdatedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationAggregationSource")
    public OrganizationAggregationSource organizationAggregationSource;
    public ConfigurationAggregator withOrganizationAggregationSource(OrganizationAggregationSource organizationAggregationSource) {
        this.organizationAggregationSource = organizationAggregationSource;
        return this;
    }
}