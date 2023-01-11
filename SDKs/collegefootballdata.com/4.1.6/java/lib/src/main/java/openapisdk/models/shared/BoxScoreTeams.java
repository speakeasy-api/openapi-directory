package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BoxScoreTeams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cumulativePpa")
    public BoxScoreTeamsCumulativePpa[] cumulativePpa;
    public BoxScoreTeams withCumulativePpa(BoxScoreTeamsCumulativePpa[] cumulativePpa) {
        this.cumulativePpa = cumulativePpa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explosiveness")
    public BoxScoreTeamsExplosiveness[] explosiveness;
    public BoxScoreTeams withExplosiveness(BoxScoreTeamsExplosiveness[] explosiveness) {
        this.explosiveness = explosiveness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldPosition")
    public BoxScoreTeamsFieldPosition[] fieldPosition;
    public BoxScoreTeams withFieldPosition(BoxScoreTeamsFieldPosition[] fieldPosition) {
        this.fieldPosition = fieldPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("havoc")
    public BoxScoreTeamsHavoc[] havoc;
    public BoxScoreTeams withHavoc(BoxScoreTeamsHavoc[] havoc) {
        this.havoc = havoc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ppa")
    public BoxScoreTeamsPpa[] ppa;
    public BoxScoreTeams withPpa(BoxScoreTeamsPpa[] ppa) {
        this.ppa = ppa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rushing")
    public BoxScoreTeamsRushing[] rushing;
    public BoxScoreTeams withRushing(BoxScoreTeamsRushing[] rushing) {
        this.rushing = rushing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scoringOpportunities")
    public BoxScoreTeamsScoringOpportunities[] scoringOpportunities;
    public BoxScoreTeams withScoringOpportunities(BoxScoreTeamsScoringOpportunities[] scoringOpportunities) {
        this.scoringOpportunities = scoringOpportunities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successRates")
    public BoxScoreTeamsSuccessRates[] successRates;
    public BoxScoreTeams withSuccessRates(BoxScoreTeamsSuccessRates[] successRates) {
        this.successRates = successRates;
        return this;
    }
}