package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetImagesList200ApplicationJsonLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pages")
    public Object pages;
    public GetImagesList200ApplicationJsonLinks withPages(Object pages) {
        this.pages = pages;
        return this;
    }
}