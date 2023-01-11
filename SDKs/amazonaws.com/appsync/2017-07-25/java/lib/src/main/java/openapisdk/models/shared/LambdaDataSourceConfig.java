package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LambdaDataSourceConfig
 * Describes an Amazon Web Services Lambda data source configuration.
**/
public class LambdaDataSourceConfig {
    @JsonProperty("lambdaFunctionArn")
    public String lambdaFunctionArn;
    public LambdaDataSourceConfig withLambdaFunctionArn(String lambdaFunctionArn) {
        this.lambdaFunctionArn = lambdaFunctionArn;
        return this;
    }
}