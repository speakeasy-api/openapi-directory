package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutConfigurationAggregatorRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountAggregationSources")
    public AccountAggregationSource[] accountAggregationSources;
    public PutConfigurationAggregatorRequest withAccountAggregationSources(AccountAggregationSource[] accountAggregationSources) {
        this.accountAggregationSources = accountAggregationSources;
        return this;
    }
    @JsonProperty("ConfigurationAggregatorName")
    public String configurationAggregatorName;
    public PutConfigurationAggregatorRequest withConfigurationAggregatorName(String configurationAggregatorName) {
        this.configurationAggregatorName = configurationAggregatorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationAggregationSource")
    public OrganizationAggregationSource organizationAggregationSource;
    public PutConfigurationAggregatorRequest withOrganizationAggregationSource(OrganizationAggregationSource organizationAggregationSource) {
        this.organizationAggregationSource = organizationAggregationSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public PutConfigurationAggregatorRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}