package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDataSourceRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateDataSourceRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamodbConfig")
    public UpdateDataSourceRequestBodyDynamodbConfig dynamodbConfig;
    public UpdateDataSourceRequestBody withDynamodbConfig(UpdateDataSourceRequestBodyDynamodbConfig dynamodbConfig) {
        this.dynamodbConfig = dynamodbConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elasticsearchConfig")
    public UpdateDataSourceRequestBodyElasticsearchConfig elasticsearchConfig;
    public UpdateDataSourceRequestBody withElasticsearchConfig(UpdateDataSourceRequestBodyElasticsearchConfig elasticsearchConfig) {
        this.elasticsearchConfig = elasticsearchConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpConfig")
    public UpdateDataSourceRequestBodyHttpConfig httpConfig;
    public UpdateDataSourceRequestBody withHttpConfig(UpdateDataSourceRequestBodyHttpConfig httpConfig) {
        this.httpConfig = httpConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaConfig")
    public UpdateDataSourceRequestBodyLambdaConfig lambdaConfig;
    public UpdateDataSourceRequestBody withLambdaConfig(UpdateDataSourceRequestBodyLambdaConfig lambdaConfig) {
        this.lambdaConfig = lambdaConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationalDatabaseConfig")
    public UpdateDataSourceRequestBodyRelationalDatabaseConfig relationalDatabaseConfig;
    public UpdateDataSourceRequestBody withRelationalDatabaseConfig(UpdateDataSourceRequestBodyRelationalDatabaseConfig relationalDatabaseConfig) {
        this.relationalDatabaseConfig = relationalDatabaseConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceRoleArn")
    public String serviceRoleArn;
    public UpdateDataSourceRequestBody withServiceRoleArn(String serviceRoleArn) {
        this.serviceRoleArn = serviceRoleArn;
        return this;
    }
    @JsonProperty("type")
    public UpdateDataSourceRequestBodyTypeEnum type;
    public UpdateDataSourceRequestBody withType(UpdateDataSourceRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}