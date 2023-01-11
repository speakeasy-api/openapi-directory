package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTestGridSessionArtifactsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResult")
    public Long maxResult;
    public ListTestGridSessionArtifactsRequest withMaxResult(Long maxResult) {
        this.maxResult = maxResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListTestGridSessionArtifactsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("sessionArn")
    public String sessionArn;
    public ListTestGridSessionArtifactsRequest withSessionArn(String sessionArn) {
        this.sessionArn = sessionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public TestGridSessionArtifactCategoryEnum type;
    public ListTestGridSessionArtifactsRequest withType(TestGridSessionArtifactCategoryEnum type) {
        this.type = type;
        return this;
    }
}