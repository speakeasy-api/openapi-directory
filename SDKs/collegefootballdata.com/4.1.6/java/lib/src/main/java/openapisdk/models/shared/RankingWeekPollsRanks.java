package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RankingWeekPollsRanks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conference")
    public String conference;
    public RankingWeekPollsRanks withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstPlaceVotes")
    public Long firstPlaceVotes;
    public RankingWeekPollsRanks withFirstPlaceVotes(Long firstPlaceVotes) {
        this.firstPlaceVotes = firstPlaceVotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("points")
    public Long points;
    public RankingWeekPollsRanks withPoints(Long points) {
        this.points = points;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank")
    public Long rank;
    public RankingWeekPollsRanks withRank(Long rank) {
        this.rank = rank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("school")
    public String school;
    public RankingWeekPollsRanks withSchool(String school) {
        this.school = school;
        return this;
    }
}