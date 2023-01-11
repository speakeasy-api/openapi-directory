package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Timeline {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstOnline")
    public String firstOnline;
    public Timeline withFirstOnline(String firstOnline) {
        this.firstOnline = firstOnline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("posted")
    public String posted;
    public Timeline withPosted(String posted) {
        this.posted = posted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherAcceptance")
    public String publisherAcceptance;
    public Timeline withPublisherAcceptance(String publisherAcceptance) {
        this.publisherAcceptance = publisherAcceptance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherPublication")
    public String publisherPublication;
    public Timeline withPublisherPublication(String publisherPublication) {
        this.publisherPublication = publisherPublication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public String revision;
    public Timeline withRevision(String revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("submission")
    public String submission;
    public Timeline withSubmission(String submission) {
        this.submission = submission;
        return this;
    }
}