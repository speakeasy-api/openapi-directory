package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CommitteeDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("affiliated_committee_name")
    public String affiliatedCommitteeName;
    public CommitteeDetail withAffiliatedCommitteeName(String affiliatedCommitteeName) {
        this.affiliatedCommitteeName = affiliatedCommitteeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_ids")
    public String[] candidateIds;
    public CommitteeDetail withCandidateIds(String[] candidateIds) {
        this.candidateIds = candidateIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public CommitteeDetail withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("committee_id")
    public String committeeId;
    public CommitteeDetail withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_type")
    public String committeeType;
    public CommitteeDetail withCommitteeType(String committeeType) {
        this.committeeType = committeeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_type_full")
    public String committeeTypeFull;
    public CommitteeDetail withCommitteeTypeFull(String committeeTypeFull) {
        this.committeeTypeFull = committeeTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custodian_city")
    public String custodianCity;
    public CommitteeDetail withCustodianCity(String custodianCity) {
        this.custodianCity = custodianCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custodian_name_1")
    public String custodianName1;
    public CommitteeDetail withCustodianName1(String custodianName1) {
        this.custodianName1 = custodianName1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custodian_name_2")
    public String custodianName2;
    public CommitteeDetail withCustodianName2(String custodianName2) {
        this.custodianName2 = custodianName2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custodian_name_full")
    public String custodianNameFull;
    public CommitteeDetail withCustodianNameFull(String custodianNameFull) {
        this.custodianNameFull = custodianNameFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custodian_name_middle")
    public String custodianNameMiddle;
    public CommitteeDetail withCustodianNameMiddle(String custodianNameMiddle) {
        this.custodianNameMiddle = custodianNameMiddle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custodian_name_prefix")
    public String custodianNamePrefix;
    public CommitteeDetail withCustodianNamePrefix(String custodianNamePrefix) {
        this.custodianNamePrefix = custodianNamePrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custodian_name_suffix")
    public String custodianNameSuffix;
    public CommitteeDetail withCustodianNameSuffix(String custodianNameSuffix) {
        this.custodianNameSuffix = custodianNameSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custodian_name_title")
    public String custodianNameTitle;
    public CommitteeDetail withCustodianNameTitle(String custodianNameTitle) {
        this.custodianNameTitle = custodianNameTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custodian_phone")
    public String custodianPhone;
    public CommitteeDetail withCustodianPhone(String custodianPhone) {
        this.custodianPhone = custodianPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custodian_state")
    public String custodianState;
    public CommitteeDetail withCustodianState(String custodianState) {
        this.custodianState = custodianState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custodian_street_1")
    public String custodianStreet1;
    public CommitteeDetail withCustodianStreet1(String custodianStreet1) {
        this.custodianStreet1 = custodianStreet1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custodian_street_2")
    public String custodianStreet2;
    public CommitteeDetail withCustodianStreet2(String custodianStreet2) {
        this.custodianStreet2 = custodianStreet2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custodian_zip")
    public String custodianZip;
    public CommitteeDetail withCustodianZip(String custodianZip) {
        this.custodianZip = custodianZip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cycles")
    public Integer[] cycles;
    public CommitteeDetail withCycles(Integer[] cycles) {
        this.cycles = cycles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("designation")
    public String designation;
    public CommitteeDetail withDesignation(String designation) {
        this.designation = designation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("designation_full")
    public String designationFull;
    public CommitteeDetail withDesignationFull(String designationFull) {
        this.designationFull = designationFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public CommitteeDetail withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fax")
    public String fax;
    public CommitteeDetail withFax(String fax) {
        this.fax = fax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filing_frequency")
    public String filingFrequency;
    public CommitteeDetail withFilingFrequency(String filingFrequency) {
        this.filingFrequency = filingFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_file_date")
    public LocalDate firstFileDate;
    public CommitteeDetail withFirstFileDate(LocalDate firstFileDate) {
        this.firstFileDate = firstFileDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_type")
    public String formType;
    public CommitteeDetail withFormType(String formType) {
        this.formType = formType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_file_date")
    public LocalDate lastFileDate;
    public CommitteeDetail withLastFileDate(LocalDate lastFileDate) {
        this.lastFileDate = lastFileDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadership_pac")
    public String leadershipPac;
    public CommitteeDetail withLeadershipPac(String leadershipPac) {
        this.leadershipPac = leadershipPac;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lobbyist_registrant_pac")
    public String lobbyistRegistrantPac;
    public CommitteeDetail withLobbyistRegistrantPac(String lobbyistRegistrantPac) {
        this.lobbyistRegistrantPac = lobbyistRegistrantPac;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CommitteeDetail withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_type")
    public String organizationType;
    public CommitteeDetail withOrganizationType(String organizationType) {
        this.organizationType = organizationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_type_full")
    public String organizationTypeFull;
    public CommitteeDetail withOrganizationTypeFull(String organizationTypeFull) {
        this.organizationTypeFull = organizationTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("party")
    public String party;
    public CommitteeDetail withParty(String party) {
        this.party = party;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("party_full")
    public String partyFull;
    public CommitteeDetail withPartyFull(String partyFull) {
        this.partyFull = partyFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("party_type")
    public String partyType;
    public CommitteeDetail withPartyType(String partyType) {
        this.partyType = partyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("party_type_full")
    public String partyTypeFull;
    public CommitteeDetail withPartyTypeFull(String partyTypeFull) {
        this.partyTypeFull = partyTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sponsor_candidate_ids")
    public String[] sponsorCandidateIds;
    public CommitteeDetail withSponsorCandidateIds(String[] sponsorCandidateIds) {
        this.sponsorCandidateIds = sponsorCandidateIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public CommitteeDetail withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state_full")
    public String stateFull;
    public CommitteeDetail withStateFull(String stateFull) {
        this.stateFull = stateFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_1")
    public String street1;
    public CommitteeDetail withStreet1(String street1) {
        this.street1 = street1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_2")
    public String street2;
    public CommitteeDetail withStreet2(String street2) {
        this.street2 = street2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasurer_city")
    public String treasurerCity;
    public CommitteeDetail withTreasurerCity(String treasurerCity) {
        this.treasurerCity = treasurerCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasurer_name")
    public String treasurerName;
    public CommitteeDetail withTreasurerName(String treasurerName) {
        this.treasurerName = treasurerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasurer_name_1")
    public String treasurerName1;
    public CommitteeDetail withTreasurerName1(String treasurerName1) {
        this.treasurerName1 = treasurerName1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasurer_name_2")
    public String treasurerName2;
    public CommitteeDetail withTreasurerName2(String treasurerName2) {
        this.treasurerName2 = treasurerName2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasurer_name_middle")
    public String treasurerNameMiddle;
    public CommitteeDetail withTreasurerNameMiddle(String treasurerNameMiddle) {
        this.treasurerNameMiddle = treasurerNameMiddle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasurer_name_prefix")
    public String treasurerNamePrefix;
    public CommitteeDetail withTreasurerNamePrefix(String treasurerNamePrefix) {
        this.treasurerNamePrefix = treasurerNamePrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasurer_name_suffix")
    public String treasurerNameSuffix;
    public CommitteeDetail withTreasurerNameSuffix(String treasurerNameSuffix) {
        this.treasurerNameSuffix = treasurerNameSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasurer_name_title")
    public String treasurerNameTitle;
    public CommitteeDetail withTreasurerNameTitle(String treasurerNameTitle) {
        this.treasurerNameTitle = treasurerNameTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasurer_phone")
    public String treasurerPhone;
    public CommitteeDetail withTreasurerPhone(String treasurerPhone) {
        this.treasurerPhone = treasurerPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasurer_state")
    public String treasurerState;
    public CommitteeDetail withTreasurerState(String treasurerState) {
        this.treasurerState = treasurerState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasurer_street_1")
    public String treasurerStreet1;
    public CommitteeDetail withTreasurerStreet1(String treasurerStreet1) {
        this.treasurerStreet1 = treasurerStreet1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasurer_street_2")
    public String treasurerStreet2;
    public CommitteeDetail withTreasurerStreet2(String treasurerStreet2) {
        this.treasurerStreet2 = treasurerStreet2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasurer_zip")
    public String treasurerZip;
    public CommitteeDetail withTreasurerZip(String treasurerZip) {
        this.treasurerZip = treasurerZip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public CommitteeDetail withWebsite(String website) {
        this.website = website;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zip")
    public String zip;
    public CommitteeDetail withZip(String zip) {
        this.zip = zip;
        return this;
    }
}