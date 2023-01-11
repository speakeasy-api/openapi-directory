package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAccessPreviewRequestBody {
    @JsonProperty("analyzerArn")
    public String analyzerArn;
    public CreateAccessPreviewRequestBody withAnalyzerArn(String analyzerArn) {
        this.analyzerArn = analyzerArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateAccessPreviewRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("configurations")
    public java.util.Map<String, openapisdk.models.shared.Configuration> configurations;
    public CreateAccessPreviewRequestBody withConfigurations(java.util.Map<String, openapisdk.models.shared.Configuration> configurations) {
        this.configurations = configurations;
        return this;
    }
}