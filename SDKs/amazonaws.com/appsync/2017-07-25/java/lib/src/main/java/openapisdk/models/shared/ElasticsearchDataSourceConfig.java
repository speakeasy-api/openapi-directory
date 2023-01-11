package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ElasticsearchDataSourceConfig
 * Describes an Elasticsearch data source configuration.
**/
public class ElasticsearchDataSourceConfig {
    @JsonProperty("awsRegion")
    public String awsRegion;
    public ElasticsearchDataSourceConfig withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
    @JsonProperty("endpoint")
    public String endpoint;
    public ElasticsearchDataSourceConfig withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
}