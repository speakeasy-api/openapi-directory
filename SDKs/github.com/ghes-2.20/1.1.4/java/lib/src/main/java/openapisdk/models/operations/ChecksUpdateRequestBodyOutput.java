package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChecksUpdateRequestBodyOutput
 * Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/enterprise-server@2.20/rest/reference/checks#output-object-1) description.
**/
public class ChecksUpdateRequestBodyOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public ChecksUpdateRequestBodyOutputAnnotations[] annotations;
    public ChecksUpdateRequestBodyOutput withAnnotations(ChecksUpdateRequestBodyOutputAnnotations[] annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public ChecksUpdateRequestBodyOutputImages[] images;
    public ChecksUpdateRequestBodyOutput withImages(ChecksUpdateRequestBodyOutputImages[] images) {
        this.images = images;
        return this;
    }
    @JsonProperty("summary")
    public String summary;
    public ChecksUpdateRequestBodyOutput withSummary(String summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public ChecksUpdateRequestBodyOutput withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ChecksUpdateRequestBodyOutput withTitle(String title) {
        this.title = title;
        return this;
    }
}