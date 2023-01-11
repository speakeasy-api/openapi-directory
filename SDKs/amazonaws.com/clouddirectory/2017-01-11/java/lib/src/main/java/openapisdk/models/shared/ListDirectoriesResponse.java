package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDirectoriesResponse {
    @JsonProperty("Directories")
    public Directory[] directories;
    public ListDirectoriesResponse withDirectories(Directory[] directories) {
        this.directories = directories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListDirectoriesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}