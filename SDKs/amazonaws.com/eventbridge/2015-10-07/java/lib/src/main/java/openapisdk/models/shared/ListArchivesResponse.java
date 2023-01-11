package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListArchivesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Archives")
    public Archive[] archives;
    public ListArchivesResponse withArchives(Archive[] archives) {
        this.archives = archives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListArchivesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}