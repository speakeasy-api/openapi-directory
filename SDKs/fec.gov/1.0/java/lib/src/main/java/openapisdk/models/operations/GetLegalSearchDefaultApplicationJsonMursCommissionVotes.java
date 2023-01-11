package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLegalSearchDefaultApplicationJsonMursCommissionVotes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public GetLegalSearchDefaultApplicationJsonMursCommissionVotes withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vote_date")
    public LocalDate voteDate;
    public GetLegalSearchDefaultApplicationJsonMursCommissionVotes withVoteDate(LocalDate voteDate) {
        this.voteDate = voteDate;
        return this;
    }
}