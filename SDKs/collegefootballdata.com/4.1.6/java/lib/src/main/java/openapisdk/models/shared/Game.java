package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Game {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attendance")
    public Long attendance;
    public Game withAttendance(Long attendance) {
        this.attendance = attendance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("away_conference")
    public String awayConference;
    public Game withAwayConference(String awayConference) {
        this.awayConference = awayConference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("away_id")
    public Long awayId;
    public Game withAwayId(Long awayId) {
        this.awayId = awayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("away_line_scores")
    public Long[] awayLineScores;
    public Game withAwayLineScores(Long[] awayLineScores) {
        this.awayLineScores = awayLineScores;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("away_points")
    public Long awayPoints;
    public Game withAwayPoints(Long awayPoints) {
        this.awayPoints = awayPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("away_post_win_prob")
    public Double awayPostWinProb;
    public Game withAwayPostWinProb(Double awayPostWinProb) {
        this.awayPostWinProb = awayPostWinProb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("away_team")
    public String awayTeam;
    public Game withAwayTeam(String awayTeam) {
        this.awayTeam = awayTeam;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conference_game")
    public Boolean conferenceGame;
    public Game withConferenceGame(Boolean conferenceGame) {
        this.conferenceGame = conferenceGame;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excitement_index")
    public Double excitementIndex;
    public Game withExcitementIndex(Double excitementIndex) {
        this.excitementIndex = excitementIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highlights")
    public String highlights;
    public Game withHighlights(String highlights) {
        this.highlights = highlights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_conference")
    public String homeConference;
    public Game withHomeConference(String homeConference) {
        this.homeConference = homeConference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_id")
    public Long homeId;
    public Game withHomeId(Long homeId) {
        this.homeId = homeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_line_scores")
    public Long[] homeLineScores;
    public Game withHomeLineScores(Long[] homeLineScores) {
        this.homeLineScores = homeLineScores;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_points")
    public Long homePoints;
    public Game withHomePoints(Long homePoints) {
        this.homePoints = homePoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_post_win_prob")
    public Double homePostWinProb;
    public Game withHomePostWinProb(Double homePostWinProb) {
        this.homePostWinProb = homePostWinProb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_team")
    public String homeTeam;
    public Game withHomeTeam(String homeTeam) {
        this.homeTeam = homeTeam;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Game withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("neutral_site")
    public Boolean neutralSite;
    public Game withNeutralSite(Boolean neutralSite) {
        this.neutralSite = neutralSite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public Game withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("season")
    public Long season;
    public Game withSeason(Long season) {
        this.season = season;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("season_type")
    public String seasonType;
    public Game withSeasonType(String seasonType) {
        this.seasonType = seasonType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_date")
    public String startDate;
    public Game withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_time_tbd")
    public Boolean startTimeTbd;
    public Game withStartTimeTbd(Boolean startTimeTbd) {
        this.startTimeTbd = startTimeTbd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("venue")
    public String venue;
    public Game withVenue(String venue) {
        this.venue = venue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("venue_id")
    public Long venueId;
    public Game withVenueId(Long venueId) {
        this.venueId = venueId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("week")
    public Long week;
    public Game withWeek(Long week) {
        this.week = week;
        return this;
    }
}