package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListUploadsResult
 * Represents the result of a list uploads request.
**/
public class ListUploadsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListUploadsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploads")
    public Upload[] uploads;
    public ListUploadsResult withUploads(Upload[] uploads) {
        this.uploads = uploads;
        return this;
    }
}