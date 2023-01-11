package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DraftPick {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collegeAthleteId")
    public Long collegeAthleteId;
    public DraftPick withCollegeAthleteId(Long collegeAthleteId) {
        this.collegeAthleteId = collegeAthleteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collegeConference")
    public String collegeConference;
    public DraftPick withCollegeConference(String collegeConference) {
        this.collegeConference = collegeConference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collegeId")
    public Long collegeId;
    public DraftPick withCollegeId(Long collegeId) {
        this.collegeId = collegeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collegeTeam")
    public String collegeTeam;
    public DraftPick withCollegeTeam(String collegeTeam) {
        this.collegeTeam = collegeTeam;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Long height;
    public DraftPick withHeight(Long height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hometownInfo")
    public DraftPickHometownInfo hometownInfo;
    public DraftPick withHometownInfo(DraftPickHometownInfo hometownInfo) {
        this.hometownInfo = hometownInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DraftPick withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nflAthleteId")
    public Long nflAthleteId;
    public DraftPick withNflAthleteId(Long nflAthleteId) {
        this.nflAthleteId = nflAthleteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nflTeam")
    public String nflTeam;
    public DraftPick withNflTeam(String nflTeam) {
        this.nflTeam = nflTeam;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overall")
    public Long overall;
    public DraftPick withOverall(Long overall) {
        this.overall = overall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pick")
    public Long pick;
    public DraftPick withPick(Long pick) {
        this.pick = pick;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public String position;
    public DraftPick withPosition(String position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preDraftGrade")
    public Long preDraftGrade;
    public DraftPick withPreDraftGrade(Long preDraftGrade) {
        this.preDraftGrade = preDraftGrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preDraftPositionRanking")
    public Long preDraftPositionRanking;
    public DraftPick withPreDraftPositionRanking(Long preDraftPositionRanking) {
        this.preDraftPositionRanking = preDraftPositionRanking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preDraftRanking")
    public Long preDraftRanking;
    public DraftPick withPreDraftRanking(Long preDraftRanking) {
        this.preDraftRanking = preDraftRanking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("round")
    public Long round;
    public DraftPick withRound(Long round) {
        this.round = round;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Long weight;
    public DraftPick withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Long year;
    public DraftPick withYear(Long year) {
        this.year = year;
        return this;
    }
}