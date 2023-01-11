package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDataSourceRequestBodyLambdaConfig
 * Describes an Amazon Web Services Lambda data source configuration.
**/
public class UpdateDataSourceRequestBodyLambdaConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaFunctionArn")
    public String lambdaFunctionArn;
    public UpdateDataSourceRequestBodyLambdaConfig withLambdaFunctionArn(String lambdaFunctionArn) {
        this.lambdaFunctionArn = lambdaFunctionArn;
        return this;
    }
}