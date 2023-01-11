package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConferenceSpRatingDefenseHavoc {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("db")
    public Double db;
    public ConferenceSpRatingDefenseHavoc withDb(Double db) {
        this.db = db;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frontSeven")
    public Double frontSeven;
    public ConferenceSpRatingDefenseHavoc withFrontSeven(Double frontSeven) {
        this.frontSeven = frontSeven;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public ConferenceSpRatingDefenseHavoc withTotal(Double total) {
        this.total = total;
        return this;
    }
}