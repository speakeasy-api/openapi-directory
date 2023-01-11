package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CommitteeSponsorCandidateList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sponsor_candidate_id")
    public String sponsorCandidateId;
    public CommitteeSponsorCandidateList withSponsorCandidateId(String sponsorCandidateId) {
        this.sponsorCandidateId = sponsorCandidateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sponsor_candidate_name")
    public String sponsorCandidateName;
    public CommitteeSponsorCandidateList withSponsorCandidateName(String sponsorCandidateName) {
        this.sponsorCandidateName = sponsorCandidateName;
        return this;
    }
}