package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Celebrity
 * Provides information about a celebrity recognized by the <a>RecognizeCelebrities</a> operation.
**/
public class Celebrity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Face")
    public ComparedFace face;
    public Celebrity withFace(ComparedFace face) {
        this.face = face;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public Celebrity withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KnownGender")
    public KnownGender knownGender;
    public Celebrity withKnownGender(KnownGender knownGender) {
        this.knownGender = knownGender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MatchConfidence")
    public Float matchConfidence;
    public Celebrity withMatchConfidence(Float matchConfidence) {
        this.matchConfidence = matchConfidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Celebrity withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Urls")
    public String[] urls;
    public Celebrity withUrls(String[] urls) {
        this.urls = urls;
        return this;
    }
}