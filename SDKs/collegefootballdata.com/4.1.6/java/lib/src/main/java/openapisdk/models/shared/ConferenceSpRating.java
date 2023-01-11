package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConferenceSpRating {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conference")
    public String conference;
    public ConferenceSpRating withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defense")
    public ConferenceSpRatingDefense defense;
    public ConferenceSpRating withDefense(ConferenceSpRatingDefense defense) {
        this.defense = defense;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offense")
    public ConferenceSpRatingOffense offense;
    public ConferenceSpRating withOffense(ConferenceSpRatingOffense offense) {
        this.offense = offense;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rating")
    public Double rating;
    public ConferenceSpRating withRating(Double rating) {
        this.rating = rating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondOrderWins")
    public Double secondOrderWins;
    public ConferenceSpRating withSecondOrderWins(Double secondOrderWins) {
        this.secondOrderWins = secondOrderWins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sos")
    public Double sos;
    public ConferenceSpRating withSos(Double sos) {
        this.sos = sos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialTeams")
    public ConferenceSpRatingSpecialTeams specialTeams;
    public ConferenceSpRating withSpecialTeams(ConferenceSpRatingSpecialTeams specialTeams) {
        this.specialTeams = specialTeams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Long year;
    public ConferenceSpRating withYear(Long year) {
        this.year = year;
        return this;
    }
}