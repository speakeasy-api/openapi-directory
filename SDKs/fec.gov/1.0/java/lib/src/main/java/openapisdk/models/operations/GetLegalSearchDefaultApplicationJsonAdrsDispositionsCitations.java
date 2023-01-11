package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GetLegalSearchDefaultApplicationJsonAdrsDispositionsCitations withUrl(String url) {
        this.url = url;
        return this;
    }
}