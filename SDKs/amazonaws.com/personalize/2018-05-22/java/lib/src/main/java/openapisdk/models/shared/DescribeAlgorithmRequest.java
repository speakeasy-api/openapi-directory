package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAlgorithmRequest {
    @JsonProperty("algorithmArn")
    public String algorithmArn;
    public DescribeAlgorithmRequest withAlgorithmArn(String algorithmArn) {
        this.algorithmArn = algorithmArn;
        return this;
    }
}