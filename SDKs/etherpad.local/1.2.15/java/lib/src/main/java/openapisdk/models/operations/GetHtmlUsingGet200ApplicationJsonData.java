package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetHtmlUsingGet200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html")
    public String html;
    public GetHtmlUsingGet200ApplicationJsonData withHtml(String html) {
        this.html = html;
        return this;
    }
}