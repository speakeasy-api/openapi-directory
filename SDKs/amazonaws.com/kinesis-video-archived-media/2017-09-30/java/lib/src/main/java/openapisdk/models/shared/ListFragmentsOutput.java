package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFragmentsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Fragments")
    public Fragment[] fragments;
    public ListFragmentsOutput withFragments(Fragment[] fragments) {
        this.fragments = fragments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListFragmentsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}