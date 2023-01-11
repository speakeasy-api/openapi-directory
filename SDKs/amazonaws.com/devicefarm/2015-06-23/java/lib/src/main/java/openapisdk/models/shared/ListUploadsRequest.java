package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListUploadsRequest
 * Represents a request to the list uploads operation.
**/
public class ListUploadsRequest {
    @JsonProperty("arn")
    public String arn;
    public ListUploadsRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListUploadsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UploadTypeEnum type;
    public ListUploadsRequest withType(UploadTypeEnum type) {
        this.type = type;
        return this;
    }
}