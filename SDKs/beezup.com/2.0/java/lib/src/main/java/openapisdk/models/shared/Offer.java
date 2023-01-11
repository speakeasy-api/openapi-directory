package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Offer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public OfferContent content;
    public Offer withContent(OfferContent content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public BeezUpCommonInfoSummaries info;
    public Offer withInfo(BeezUpCommonInfoSummaries info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public OfferLinks links;
    public Offer withLinks(OfferLinks links) {
        this.links = links;
        return this;
    }
}