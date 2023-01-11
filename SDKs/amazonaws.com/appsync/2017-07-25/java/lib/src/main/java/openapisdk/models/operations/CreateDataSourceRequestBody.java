package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDataSourceRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateDataSourceRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamodbConfig")
    public CreateDataSourceRequestBodyDynamodbConfig dynamodbConfig;
    public CreateDataSourceRequestBody withDynamodbConfig(CreateDataSourceRequestBodyDynamodbConfig dynamodbConfig) {
        this.dynamodbConfig = dynamodbConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elasticsearchConfig")
    public CreateDataSourceRequestBodyElasticsearchConfig elasticsearchConfig;
    public CreateDataSourceRequestBody withElasticsearchConfig(CreateDataSourceRequestBodyElasticsearchConfig elasticsearchConfig) {
        this.elasticsearchConfig = elasticsearchConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpConfig")
    public CreateDataSourceRequestBodyHttpConfig httpConfig;
    public CreateDataSourceRequestBody withHttpConfig(CreateDataSourceRequestBodyHttpConfig httpConfig) {
        this.httpConfig = httpConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaConfig")
    public CreateDataSourceRequestBodyLambdaConfig lambdaConfig;
    public CreateDataSourceRequestBody withLambdaConfig(CreateDataSourceRequestBodyLambdaConfig lambdaConfig) {
        this.lambdaConfig = lambdaConfig;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateDataSourceRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationalDatabaseConfig")
    public CreateDataSourceRequestBodyRelationalDatabaseConfig relationalDatabaseConfig;
    public CreateDataSourceRequestBody withRelationalDatabaseConfig(CreateDataSourceRequestBodyRelationalDatabaseConfig relationalDatabaseConfig) {
        this.relationalDatabaseConfig = relationalDatabaseConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceRoleArn")
    public String serviceRoleArn;
    public CreateDataSourceRequestBody withServiceRoleArn(String serviceRoleArn) {
        this.serviceRoleArn = serviceRoleArn;
        return this;
    }
    @JsonProperty("type")
    public CreateDataSourceRequestBodyTypeEnum type;
    public CreateDataSourceRequestBody withType(CreateDataSourceRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}