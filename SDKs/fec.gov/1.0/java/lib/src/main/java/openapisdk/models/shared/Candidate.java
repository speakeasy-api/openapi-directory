package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Candidate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active_through")
    public Integer activeThrough;
    public Candidate withActiveThrough(Integer activeThrough) {
        this.activeThrough = activeThrough;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_id")
    public String candidateId;
    public Candidate withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_inactive")
    public Boolean candidateInactive;
    public Candidate withCandidateInactive(Boolean candidateInactive) {
        this.candidateInactive = candidateInactive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_status")
    public String candidateStatus;
    public Candidate withCandidateStatus(String candidateStatus) {
        this.candidateStatus = candidateStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cycles")
    public Integer[] cycles;
    public Candidate withCycles(Integer[] cycles) {
        this.cycles = cycles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("district")
    public String district;
    public Candidate withDistrict(String district) {
        this.district = district;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("district_number")
    public Integer districtNumber;
    public Candidate withDistrictNumber(Integer districtNumber) {
        this.districtNumber = districtNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_districts")
    public String[] electionDistricts;
    public Candidate withElectionDistricts(String[] electionDistricts) {
        this.electionDistricts = electionDistricts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_years")
    public Integer[] electionYears;
    public Candidate withElectionYears(Integer[] electionYears) {
        this.electionYears = electionYears;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federal_funds_flag")
    public Boolean federalFundsFlag;
    public Candidate withFederalFundsFlag(Boolean federalFundsFlag) {
        this.federalFundsFlag = federalFundsFlag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_file_date")
    public LocalDate firstFileDate;
    public Candidate withFirstFileDate(LocalDate firstFileDate) {
        this.firstFileDate = firstFileDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_raised_funds")
    public Boolean hasRaisedFunds;
    public Candidate withHasRaisedFunds(Boolean hasRaisedFunds) {
        this.hasRaisedFunds = hasRaisedFunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inactive_election_years")
    public Integer[] inactiveElectionYears;
    public Candidate withInactiveElectionYears(Integer[] inactiveElectionYears) {
        this.inactiveElectionYears = inactiveElectionYears;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incumbent_challenge")
    public String incumbentChallenge;
    public Candidate withIncumbentChallenge(String incumbentChallenge) {
        this.incumbentChallenge = incumbentChallenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incumbent_challenge_full")
    public String incumbentChallengeFull;
    public Candidate withIncumbentChallengeFull(String incumbentChallengeFull) {
        this.incumbentChallengeFull = incumbentChallengeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_f2_date")
    public LocalDate lastF2Date;
    public Candidate withLastF2Date(LocalDate lastF2Date) {
        this.lastF2Date = lastF2Date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_file_date")
    public LocalDate lastFileDate;
    public Candidate withLastFileDate(LocalDate lastFileDate) {
        this.lastFileDate = lastFileDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("load_date")
    public OffsetDateTime loadDate;
    public Candidate withLoadDate(OffsetDateTime loadDate) {
        this.loadDate = loadDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Candidate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("office")
    public String office;
    public Candidate withOffice(String office) {
        this.office = office;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("office_full")
    public String officeFull;
    public Candidate withOfficeFull(String officeFull) {
        this.officeFull = officeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("party")
    public String party;
    public Candidate withParty(String party) {
        this.party = party;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("party_full")
    public String partyFull;
    public Candidate withPartyFull(String partyFull) {
        this.partyFull = partyFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principal_committees")
    public CandidatePrincipalCommittees[] principalCommittees;
    public Candidate withPrincipalCommittees(CandidatePrincipalCommittees[] principalCommittees) {
        this.principalCommittees = principalCommittees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public Candidate withState(String state) {
        this.state = state;
        return this;
    }
}