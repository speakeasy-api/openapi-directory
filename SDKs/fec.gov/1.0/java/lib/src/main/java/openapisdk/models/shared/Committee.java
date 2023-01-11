package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Committee {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("affiliated_committee_name")
    public String affiliatedCommitteeName;
    public Committee withAffiliatedCommitteeName(String affiliatedCommitteeName) {
        this.affiliatedCommitteeName = affiliatedCommitteeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_ids")
    public String[] candidateIds;
    public Committee withCandidateIds(String[] candidateIds) {
        this.candidateIds = candidateIds;
        return this;
    }
    @JsonProperty("committee_id")
    public String committeeId;
    public Committee withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_type")
    public String committeeType;
    public Committee withCommitteeType(String committeeType) {
        this.committeeType = committeeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_type_full")
    public String committeeTypeFull;
    public Committee withCommitteeTypeFull(String committeeTypeFull) {
        this.committeeTypeFull = committeeTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cycles")
    public Integer[] cycles;
    public Committee withCycles(Integer[] cycles) {
        this.cycles = cycles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("designation")
    public String designation;
    public Committee withDesignation(String designation) {
        this.designation = designation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("designation_full")
    public String designationFull;
    public Committee withDesignationFull(String designationFull) {
        this.designationFull = designationFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filing_frequency")
    public String filingFrequency;
    public Committee withFilingFrequency(String filingFrequency) {
        this.filingFrequency = filingFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_file_date")
    public LocalDate firstFileDate;
    public Committee withFirstFileDate(LocalDate firstFileDate) {
        this.firstFileDate = firstFileDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_f1_date")
    public LocalDate lastF1Date;
    public Committee withLastF1Date(LocalDate lastF1Date) {
        this.lastF1Date = lastF1Date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_file_date")
    public LocalDate lastFileDate;
    public Committee withLastFileDate(LocalDate lastFileDate) {
        this.lastFileDate = lastFileDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Committee withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_type")
    public String organizationType;
    public Committee withOrganizationType(String organizationType) {
        this.organizationType = organizationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_type_full")
    public String organizationTypeFull;
    public Committee withOrganizationTypeFull(String organizationTypeFull) {
        this.organizationTypeFull = organizationTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("party")
    public String party;
    public Committee withParty(String party) {
        this.party = party;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("party_full")
    public String partyFull;
    public Committee withPartyFull(String partyFull) {
        this.partyFull = partyFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sponsor_candidate_ids")
    public String[] sponsorCandidateIds;
    public Committee withSponsorCandidateIds(String[] sponsorCandidateIds) {
        this.sponsorCandidateIds = sponsorCandidateIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sponsor_candidate_list")
    public CommitteeSponsorCandidateList[] sponsorCandidateList;
    public Committee withSponsorCandidateList(CommitteeSponsorCandidateList[] sponsorCandidateList) {
        this.sponsorCandidateList = sponsorCandidateList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public Committee withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasurer_name")
    public String treasurerName;
    public Committee withTreasurerName(String treasurerName) {
        this.treasurerName = treasurerName;
        return this;
    }
}