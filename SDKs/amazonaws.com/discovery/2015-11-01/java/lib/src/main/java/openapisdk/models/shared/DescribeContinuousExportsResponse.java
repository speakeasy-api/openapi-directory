package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeContinuousExportsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("descriptions")
    public ContinuousExportDescription[] descriptions;
    public DescribeContinuousExportsResponse withDescriptions(ContinuousExportDescription[] descriptions) {
        this.descriptions = descriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeContinuousExportsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}