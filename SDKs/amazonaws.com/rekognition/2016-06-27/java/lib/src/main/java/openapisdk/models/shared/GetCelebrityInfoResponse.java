package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCelebrityInfoResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KnownGender")
    public KnownGender knownGender;
    public GetCelebrityInfoResponse withKnownGender(KnownGender knownGender) {
        this.knownGender = knownGender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public GetCelebrityInfoResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Urls")
    public String[] urls;
    public GetCelebrityInfoResponse withUrls(String[] urls) {
        this.urls = urls;
        return this;
    }
}