package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TimelineUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstOnline")
    public String firstOnline;
    public TimelineUpdate withFirstOnline(String firstOnline) {
        this.firstOnline = firstOnline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherAcceptance")
    public String publisherAcceptance;
    public TimelineUpdate withPublisherAcceptance(String publisherAcceptance) {
        this.publisherAcceptance = publisherAcceptance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherPublication")
    public String publisherPublication;
    public TimelineUpdate withPublisherPublication(String publisherPublication) {
        this.publisherPublication = publisherPublication;
        return this;
    }
}