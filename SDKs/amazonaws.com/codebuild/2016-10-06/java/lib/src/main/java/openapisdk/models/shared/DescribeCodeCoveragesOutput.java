package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeCodeCoveragesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codeCoverages")
    public CodeCoverage[] codeCoverages;
    public DescribeCodeCoveragesOutput withCodeCoverages(CodeCoverage[] codeCoverages) {
        this.codeCoverages = codeCoverages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeCodeCoveragesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}