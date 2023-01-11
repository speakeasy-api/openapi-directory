package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DocumentMetadata
 * Information about the input document.
**/
public class DocumentMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Pages")
    public Long pages;
    public DocumentMetadata withPages(Long pages) {
        this.pages = pages;
        return this;
    }
}