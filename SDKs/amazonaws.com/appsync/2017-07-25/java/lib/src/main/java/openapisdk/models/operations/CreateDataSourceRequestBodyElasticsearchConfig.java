package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDataSourceRequestBodyElasticsearchConfig
 * Describes an Elasticsearch data source configuration.
**/
public class CreateDataSourceRequestBodyElasticsearchConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsRegion")
    public String awsRegion;
    public CreateDataSourceRequestBodyElasticsearchConfig withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoint")
    public String endpoint;
    public CreateDataSourceRequestBodyElasticsearchConfig withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
}