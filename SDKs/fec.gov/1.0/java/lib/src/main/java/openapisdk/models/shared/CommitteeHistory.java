package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CommitteeHistory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("affiliated_committee_name")
    public String affiliatedCommitteeName;
    public CommitteeHistory withAffiliatedCommitteeName(String affiliatedCommitteeName) {
        this.affiliatedCommitteeName = affiliatedCommitteeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_ids")
    public String[] candidateIds;
    public CommitteeHistory withCandidateIds(String[] candidateIds) {
        this.candidateIds = candidateIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public CommitteeHistory withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("committee_id")
    public String committeeId;
    public CommitteeHistory withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_type")
    public String committeeType;
    public CommitteeHistory withCommitteeType(String committeeType) {
        this.committeeType = committeeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_type_full")
    public String committeeTypeFull;
    public CommitteeHistory withCommitteeTypeFull(String committeeTypeFull) {
        this.committeeTypeFull = committeeTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("convert_to_pac_flag")
    public Boolean convertToPacFlag;
    public CommitteeHistory withConvertToPacFlag(Boolean convertToPacFlag) {
        this.convertToPacFlag = convertToPacFlag;
        return this;
    }
    @JsonProperty("cycle")
    public Integer cycle;
    public CommitteeHistory withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cycles")
    public Integer[] cycles;
    public CommitteeHistory withCycles(Integer[] cycles) {
        this.cycles = cycles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cycles_has_activity")
    public Integer[] cyclesHasActivity;
    public CommitteeHistory withCyclesHasActivity(Integer[] cyclesHasActivity) {
        this.cyclesHasActivity = cyclesHasActivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cycles_has_financial")
    public Integer[] cyclesHasFinancial;
    public CommitteeHistory withCyclesHasFinancial(Integer[] cyclesHasFinancial) {
        this.cyclesHasFinancial = cyclesHasFinancial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("designation")
    public String designation;
    public CommitteeHistory withDesignation(String designation) {
        this.designation = designation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("designation_full")
    public String designationFull;
    public CommitteeHistory withDesignationFull(String designationFull) {
        this.designationFull = designationFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filing_frequency")
    public String filingFrequency;
    public CommitteeHistory withFilingFrequency(String filingFrequency) {
        this.filingFrequency = filingFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("former_candidate_election_year")
    public Integer formerCandidateElectionYear;
    public CommitteeHistory withFormerCandidateElectionYear(Integer formerCandidateElectionYear) {
        this.formerCandidateElectionYear = formerCandidateElectionYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("former_candidate_id")
    public String formerCandidateId;
    public CommitteeHistory withFormerCandidateId(String formerCandidateId) {
        this.formerCandidateId = formerCandidateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("former_candidate_name")
    public String formerCandidateName;
    public CommitteeHistory withFormerCandidateName(String formerCandidateName) {
        this.formerCandidateName = formerCandidateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("former_committee_name")
    public String formerCommitteeName;
    public CommitteeHistory withFormerCommitteeName(String formerCommitteeName) {
        this.formerCommitteeName = formerCommitteeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_active")
    public Boolean isActive;
    public CommitteeHistory withIsActive(Boolean isActive) {
        this.isActive = isActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_cycle_has_activity")
    public Integer lastCycleHasActivity;
    public CommitteeHistory withLastCycleHasActivity(Integer lastCycleHasActivity) {
        this.lastCycleHasActivity = lastCycleHasActivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_cycle_has_financial")
    public Integer lastCycleHasFinancial;
    public CommitteeHistory withLastCycleHasFinancial(Integer lastCycleHasFinancial) {
        this.lastCycleHasFinancial = lastCycleHasFinancial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CommitteeHistory withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_type")
    public String organizationType;
    public CommitteeHistory withOrganizationType(String organizationType) {
        this.organizationType = organizationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_type_full")
    public String organizationTypeFull;
    public CommitteeHistory withOrganizationTypeFull(String organizationTypeFull) {
        this.organizationTypeFull = organizationTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("party")
    public String party;
    public CommitteeHistory withParty(String party) {
        this.party = party;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("party_full")
    public String partyFull;
    public CommitteeHistory withPartyFull(String partyFull) {
        this.partyFull = partyFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sponsor_candidate_ids")
    public String[] sponsorCandidateIds;
    public CommitteeHistory withSponsorCandidateIds(String[] sponsorCandidateIds) {
        this.sponsorCandidateIds = sponsorCandidateIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public CommitteeHistory withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state_full")
    public String stateFull;
    public CommitteeHistory withStateFull(String stateFull) {
        this.stateFull = stateFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_1")
    public String street1;
    public CommitteeHistory withStreet1(String street1) {
        this.street1 = street1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_2")
    public String street2;
    public CommitteeHistory withStreet2(String street2) {
        this.street2 = street2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasurer_name")
    public String treasurerName;
    public CommitteeHistory withTreasurerName(String treasurerName) {
        this.treasurerName = treasurerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zip")
    public String zip;
    public CommitteeHistory withZip(String zip) {
        this.zip = zip;
        return this;
    }
}