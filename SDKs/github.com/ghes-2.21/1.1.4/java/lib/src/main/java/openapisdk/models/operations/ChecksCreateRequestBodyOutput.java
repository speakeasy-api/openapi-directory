package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChecksCreateRequestBodyOutput
 * Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/enterprise-server@2.21/rest/reference/checks#output-object) description.
**/
public class ChecksCreateRequestBodyOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public ChecksCreateRequestBodyOutputAnnotations[] annotations;
    public ChecksCreateRequestBodyOutput withAnnotations(ChecksCreateRequestBodyOutputAnnotations[] annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public ChecksCreateRequestBodyOutputImages[] images;
    public ChecksCreateRequestBodyOutput withImages(ChecksCreateRequestBodyOutputImages[] images) {
        this.images = images;
        return this;
    }
    @JsonProperty("summary")
    public String summary;
    public ChecksCreateRequestBodyOutput withSummary(String summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public ChecksCreateRequestBodyOutput withText(String text) {
        this.text = text;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ChecksCreateRequestBodyOutput withTitle(String title) {
        this.title = title;
        return this;
    }
}