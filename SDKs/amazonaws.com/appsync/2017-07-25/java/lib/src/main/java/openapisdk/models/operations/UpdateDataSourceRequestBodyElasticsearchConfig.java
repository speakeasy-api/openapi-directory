package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDataSourceRequestBodyElasticsearchConfig
 * Describes an Elasticsearch data source configuration.
**/
public class UpdateDataSourceRequestBodyElasticsearchConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsRegion")
    public String awsRegion;
    public UpdateDataSourceRequestBodyElasticsearchConfig withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoint")
    public String endpoint;
    public UpdateDataSourceRequestBodyElasticsearchConfig withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
}