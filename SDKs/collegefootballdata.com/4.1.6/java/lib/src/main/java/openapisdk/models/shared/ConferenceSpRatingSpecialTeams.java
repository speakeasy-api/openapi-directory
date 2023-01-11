package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConferenceSpRatingSpecialTeams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rating")
    public Double rating;
    public ConferenceSpRatingSpecialTeams withRating(Double rating) {
        this.rating = rating;
        return this;
    }
}