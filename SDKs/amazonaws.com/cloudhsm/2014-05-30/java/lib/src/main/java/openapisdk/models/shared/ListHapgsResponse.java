package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListHapgsResponse {
    @JsonProperty("HapgList")
    public String[] hapgList;
    public ListHapgsResponse withHapgList(String[] hapgList) {
        this.hapgList = hapgList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListHapgsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}