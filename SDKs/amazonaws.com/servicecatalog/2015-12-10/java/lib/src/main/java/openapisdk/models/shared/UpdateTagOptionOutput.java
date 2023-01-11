package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateTagOptionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagOptionDetail")
    public TagOptionDetail tagOptionDetail;
    public UpdateTagOptionOutput withTagOptionDetail(TagOptionDetail tagOptionDetail) {
        this.tagOptionDetail = tagOptionDetail;
        return this;
    }
}