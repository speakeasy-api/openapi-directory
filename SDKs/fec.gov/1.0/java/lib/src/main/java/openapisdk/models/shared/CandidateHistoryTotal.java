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

public class CandidateHistoryTotal {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active_through")
    public Integer activeThrough;
    public CandidateHistoryTotal withActiveThrough(Integer activeThrough) {
        this.activeThrough = activeThrough;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_city")
    public String addressCity;
    public CandidateHistoryTotal withAddressCity(String addressCity) {
        this.addressCity = addressCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_state")
    public String addressState;
    public CandidateHistoryTotal withAddressState(String addressState) {
        this.addressState = addressState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_street_1")
    public String addressStreet1;
    public CandidateHistoryTotal withAddressStreet1(String addressStreet1) {
        this.addressStreet1 = addressStreet1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_street_2")
    public String addressStreet2;
    public CandidateHistoryTotal withAddressStreet2(String addressStreet2) {
        this.addressStreet2 = addressStreet2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_zip")
    public String addressZip;
    public CandidateHistoryTotal withAddressZip(String addressZip) {
        this.addressZip = addressZip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_election_year")
    public Integer candidateElectionYear;
    public CandidateHistoryTotal withCandidateElectionYear(Integer candidateElectionYear) {
        this.candidateElectionYear = candidateElectionYear;
        return this;
    }
    @JsonProperty("candidate_id")
    public String candidateId;
    public CandidateHistoryTotal withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_inactive")
    public Boolean candidateInactive;
    public CandidateHistoryTotal withCandidateInactive(Boolean candidateInactive) {
        this.candidateInactive = candidateInactive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_status")
    public String candidateStatus;
    public CandidateHistoryTotal withCandidateStatus(String candidateStatus) {
        this.candidateStatus = candidateStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cash_on_hand_end_period")
    public Double cashOnHandEndPeriod;
    public CandidateHistoryTotal withCashOnHandEndPeriod(Double cashOnHandEndPeriod) {
        this.cashOnHandEndPeriod = cashOnHandEndPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverage_end_date")
    public LocalDate coverageEndDate;
    public CandidateHistoryTotal withCoverageEndDate(LocalDate coverageEndDate) {
        this.coverageEndDate = coverageEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverage_start_date")
    public LocalDate coverageStartDate;
    public CandidateHistoryTotal withCoverageStartDate(LocalDate coverageStartDate) {
        this.coverageStartDate = coverageStartDate;
        return this;
    }
    @JsonProperty("cycle")
    public Integer cycle;
    public CandidateHistoryTotal withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cycles")
    public Integer[] cycles;
    public CandidateHistoryTotal withCycles(Integer[] cycles) {
        this.cycles = cycles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debts_owed_by_committee")
    public Double debtsOwedByCommittee;
    public CandidateHistoryTotal withDebtsOwedByCommittee(Double debtsOwedByCommittee) {
        this.debtsOwedByCommittee = debtsOwedByCommittee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disbursements")
    public Double disbursements;
    public CandidateHistoryTotal withDisbursements(Double disbursements) {
        this.disbursements = disbursements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("district")
    public String district;
    public CandidateHistoryTotal withDistrict(String district) {
        this.district = district;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("district_number")
    public Integer districtNumber;
    public CandidateHistoryTotal withDistrictNumber(Integer districtNumber) {
        this.districtNumber = districtNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_districts")
    public String[] electionDistricts;
    public CandidateHistoryTotal withElectionDistricts(String[] electionDistricts) {
        this.electionDistricts = electionDistricts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_year")
    public Integer electionYear;
    public CandidateHistoryTotal withElectionYear(Integer electionYear) {
        this.electionYear = electionYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_years")
    public Integer[] electionYears;
    public CandidateHistoryTotal withElectionYears(Integer[] electionYears) {
        this.electionYears = electionYears;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fec_cycles_in_election")
    public Integer[] fecCyclesInElection;
    public CandidateHistoryTotal withFecCyclesInElection(Integer[] fecCyclesInElection) {
        this.fecCyclesInElection = fecCyclesInElection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federal_funds_flag")
    public Boolean federalFundsFlag;
    public CandidateHistoryTotal withFederalFundsFlag(Boolean federalFundsFlag) {
        this.federalFundsFlag = federalFundsFlag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_file_date")
    public LocalDate firstFileDate;
    public CandidateHistoryTotal withFirstFileDate(LocalDate firstFileDate) {
        this.firstFileDate = firstFileDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flags")
    public String flags;
    public CandidateHistoryTotal withFlags(String flags) {
        this.flags = flags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_raised_funds")
    public Boolean hasRaisedFunds;
    public CandidateHistoryTotal withHasRaisedFunds(Boolean hasRaisedFunds) {
        this.hasRaisedFunds = hasRaisedFunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incumbent_challenge")
    public String incumbentChallenge;
    public CandidateHistoryTotal withIncumbentChallenge(String incumbentChallenge) {
        this.incumbentChallenge = incumbentChallenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incumbent_challenge_full")
    public String incumbentChallengeFull;
    public CandidateHistoryTotal withIncumbentChallengeFull(String incumbentChallengeFull) {
        this.incumbentChallengeFull = incumbentChallengeFull;
        return this;
    }
    @JsonProperty("is_election")
    public Boolean isElection;
    public CandidateHistoryTotal withIsElection(Boolean isElection) {
        this.isElection = isElection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_f2_date")
    public LocalDate lastF2Date;
    public CandidateHistoryTotal withLastF2Date(LocalDate lastF2Date) {
        this.lastF2Date = lastF2Date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_file_date")
    public LocalDate lastFileDate;
    public CandidateHistoryTotal withLastFileDate(LocalDate lastFileDate) {
        this.lastFileDate = lastFileDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("load_date")
    public OffsetDateTime loadDate;
    public CandidateHistoryTotal withLoadDate(OffsetDateTime loadDate) {
        this.loadDate = loadDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CandidateHistoryTotal withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("office")
    public String office;
    public CandidateHistoryTotal withOffice(String office) {
        this.office = office;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("office_full")
    public String officeFull;
    public CandidateHistoryTotal withOfficeFull(String officeFull) {
        this.officeFull = officeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("party")
    public String party;
    public CandidateHistoryTotal withParty(String party) {
        this.party = party;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("party_full")
    public String partyFull;
    public CandidateHistoryTotal withPartyFull(String partyFull) {
        this.partyFull = partyFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receipts")
    public Double receipts;
    public CandidateHistoryTotal withReceipts(Double receipts) {
        this.receipts = receipts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rounded_election_years")
    public Integer[] roundedElectionYears;
    public CandidateHistoryTotal withRoundedElectionYears(Integer[] roundedElectionYears) {
        this.roundedElectionYears = roundedElectionYears;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public CandidateHistoryTotal withState(String state) {
        this.state = state;
        return this;
    }
    @JsonProperty("two_year_period")
    public Integer twoYearPeriod;
    public CandidateHistoryTotal withTwoYearPeriod(Integer twoYearPeriod) {
        this.twoYearPeriod = twoYearPeriod;
        return this;
    }
}