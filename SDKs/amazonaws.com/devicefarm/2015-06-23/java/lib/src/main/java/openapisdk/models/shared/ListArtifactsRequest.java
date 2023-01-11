package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListArtifactsRequest
 * Represents a request to the list artifacts operation.
**/
public class ListArtifactsRequest {
    @JsonProperty("arn")
    public String arn;
    public ListArtifactsRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListArtifactsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("type")
    public ArtifactCategoryEnum type;
    public ListArtifactsRequest withType(ArtifactCategoryEnum type) {
        this.type = type;
        return this;
    }
}