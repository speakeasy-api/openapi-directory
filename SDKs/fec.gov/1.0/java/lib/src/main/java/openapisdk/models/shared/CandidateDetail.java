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

public class CandidateDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active_through")
    public Integer activeThrough;
    public CandidateDetail withActiveThrough(Integer activeThrough) {
        this.activeThrough = activeThrough;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_city")
    public String addressCity;
    public CandidateDetail withAddressCity(String addressCity) {
        this.addressCity = addressCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_state")
    public String addressState;
    public CandidateDetail withAddressState(String addressState) {
        this.addressState = addressState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_street_1")
    public String addressStreet1;
    public CandidateDetail withAddressStreet1(String addressStreet1) {
        this.addressStreet1 = addressStreet1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_street_2")
    public String addressStreet2;
    public CandidateDetail withAddressStreet2(String addressStreet2) {
        this.addressStreet2 = addressStreet2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_zip")
    public String addressZip;
    public CandidateDetail withAddressZip(String addressZip) {
        this.addressZip = addressZip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_id")
    public String candidateId;
    public CandidateDetail withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_inactive")
    public Boolean candidateInactive;
    public CandidateDetail withCandidateInactive(Boolean candidateInactive) {
        this.candidateInactive = candidateInactive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_status")
    public String candidateStatus;
    public CandidateDetail withCandidateStatus(String candidateStatus) {
        this.candidateStatus = candidateStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cycles")
    public Integer[] cycles;
    public CandidateDetail withCycles(Integer[] cycles) {
        this.cycles = cycles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("district")
    public String district;
    public CandidateDetail withDistrict(String district) {
        this.district = district;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("district_number")
    public Integer districtNumber;
    public CandidateDetail withDistrictNumber(Integer districtNumber) {
        this.districtNumber = districtNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_districts")
    public String[] electionDistricts;
    public CandidateDetail withElectionDistricts(String[] electionDistricts) {
        this.electionDistricts = electionDistricts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_years")
    public Integer[] electionYears;
    public CandidateDetail withElectionYears(Integer[] electionYears) {
        this.electionYears = electionYears;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federal_funds_flag")
    public Boolean federalFundsFlag;
    public CandidateDetail withFederalFundsFlag(Boolean federalFundsFlag) {
        this.federalFundsFlag = federalFundsFlag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_file_date")
    public LocalDate firstFileDate;
    public CandidateDetail withFirstFileDate(LocalDate firstFileDate) {
        this.firstFileDate = firstFileDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flags")
    public String flags;
    public CandidateDetail withFlags(String flags) {
        this.flags = flags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_raised_funds")
    public Boolean hasRaisedFunds;
    public CandidateDetail withHasRaisedFunds(Boolean hasRaisedFunds) {
        this.hasRaisedFunds = hasRaisedFunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incumbent_challenge")
    public String incumbentChallenge;
    public CandidateDetail withIncumbentChallenge(String incumbentChallenge) {
        this.incumbentChallenge = incumbentChallenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incumbent_challenge_full")
    public String incumbentChallengeFull;
    public CandidateDetail withIncumbentChallengeFull(String incumbentChallengeFull) {
        this.incumbentChallengeFull = incumbentChallengeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_f2_date")
    public LocalDate lastF2Date;
    public CandidateDetail withLastF2Date(LocalDate lastF2Date) {
        this.lastF2Date = lastF2Date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_file_date")
    public LocalDate lastFileDate;
    public CandidateDetail withLastFileDate(LocalDate lastFileDate) {
        this.lastFileDate = lastFileDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("load_date")
    public OffsetDateTime loadDate;
    public CandidateDetail withLoadDate(OffsetDateTime loadDate) {
        this.loadDate = loadDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CandidateDetail withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("office")
    public String office;
    public CandidateDetail withOffice(String office) {
        this.office = office;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("office_full")
    public String officeFull;
    public CandidateDetail withOfficeFull(String officeFull) {
        this.officeFull = officeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("party")
    public String party;
    public CandidateDetail withParty(String party) {
        this.party = party;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("party_full")
    public String partyFull;
    public CandidateDetail withPartyFull(String partyFull) {
        this.partyFull = partyFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public CandidateDetail withState(String state) {
        this.state = state;
        return this;
    }
}