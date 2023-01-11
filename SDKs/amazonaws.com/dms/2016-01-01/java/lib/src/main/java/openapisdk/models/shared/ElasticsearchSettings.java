package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ElasticsearchSettings
 * Provides information that defines an Elasticsearch endpoint.
**/
public class ElasticsearchSettings {
    @JsonProperty("EndpointUri")
    public String endpointUri;
    public ElasticsearchSettings withEndpointUri(String endpointUri) {
        this.endpointUri = endpointUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorRetryDuration")
    public Long errorRetryDuration;
    public ElasticsearchSettings withErrorRetryDuration(Long errorRetryDuration) {
        this.errorRetryDuration = errorRetryDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FullLoadErrorPercentage")
    public Long fullLoadErrorPercentage;
    public ElasticsearchSettings withFullLoadErrorPercentage(Long fullLoadErrorPercentage) {
        this.fullLoadErrorPercentage = fullLoadErrorPercentage;
        return this;
    }
    @JsonProperty("ServiceAccessRoleArn")
    public String serviceAccessRoleArn;
    public ElasticsearchSettings withServiceAccessRoleArn(String serviceAccessRoleArn) {
        this.serviceAccessRoleArn = serviceAccessRoleArn;
        return this;
    }
}