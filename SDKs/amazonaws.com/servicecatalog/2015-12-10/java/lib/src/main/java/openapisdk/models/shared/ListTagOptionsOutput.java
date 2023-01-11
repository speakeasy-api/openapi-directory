package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTagOptionsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageToken")
    public String pageToken;
    public ListTagOptionsOutput withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagOptionDetails")
    public TagOptionDetail[] tagOptionDetails;
    public ListTagOptionsOutput withTagOptionDetails(TagOptionDetail[] tagOptionDetails) {
        this.tagOptionDetails = tagOptionDetails;
        return this;
    }
}