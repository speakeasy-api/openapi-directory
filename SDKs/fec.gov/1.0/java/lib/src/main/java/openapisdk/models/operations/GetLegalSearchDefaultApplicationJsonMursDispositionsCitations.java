package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLegalSearchDefaultApplicationJsonMursDispositionsCitations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public GetLegalSearchDefaultApplicationJsonMursDispositionsCitations withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GetLegalSearchDefaultApplicationJsonMursDispositionsCitations withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetLegalSearchDefaultApplicationJsonMursDispositionsCitations withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GetLegalSearchDefaultApplicationJsonMursDispositionsCitations withUrl(String url) {
        this.url = url;
        return this;
    }
}