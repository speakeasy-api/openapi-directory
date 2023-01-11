package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartResourceScanRequestBody {
    @JsonProperty("analyzerArn")
    public String analyzerArn;
    public StartResourceScanRequestBody withAnalyzerArn(String analyzerArn) {
        this.analyzerArn = analyzerArn;
        return this;
    }
    @JsonProperty("resourceArn")
    public String resourceArn;
    public StartResourceScanRequestBody withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}