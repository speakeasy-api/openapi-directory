package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataSource
 * Describes a data source.
**/
public class DataSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceArn")
    public String dataSourceArn;
    public DataSource withDataSourceArn(String dataSourceArn) {
        this.dataSourceArn = dataSourceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DataSource withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamodbConfig")
    public DynamodbDataSourceConfig dynamodbConfig;
    public DataSource withDynamodbConfig(DynamodbDataSourceConfig dynamodbConfig) {
        this.dynamodbConfig = dynamodbConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elasticsearchConfig")
    public ElasticsearchDataSourceConfig elasticsearchConfig;
    public DataSource withElasticsearchConfig(ElasticsearchDataSourceConfig elasticsearchConfig) {
        this.elasticsearchConfig = elasticsearchConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpConfig")
    public HttpDataSourceConfig httpConfig;
    public DataSource withHttpConfig(HttpDataSourceConfig httpConfig) {
        this.httpConfig = httpConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaConfig")
    public LambdaDataSourceConfig lambdaConfig;
    public DataSource withLambdaConfig(LambdaDataSourceConfig lambdaConfig) {
        this.lambdaConfig = lambdaConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DataSource withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationalDatabaseConfig")
    public RelationalDatabaseDataSourceConfig relationalDatabaseConfig;
    public DataSource withRelationalDatabaseConfig(RelationalDatabaseDataSourceConfig relationalDatabaseConfig) {
        this.relationalDatabaseConfig = relationalDatabaseConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceRoleArn")
    public String serviceRoleArn;
    public DataSource withServiceRoleArn(String serviceRoleArn) {
        this.serviceRoleArn = serviceRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public DataSourceTypeEnum type;
    public DataSource withType(DataSourceTypeEnum type) {
        this.type = type;
        return this;
    }
}