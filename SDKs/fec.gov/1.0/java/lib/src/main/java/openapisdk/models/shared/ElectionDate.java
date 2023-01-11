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

public class ElectionDate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active_election")
    public Boolean activeElection;
    public ElectionDate withActiveElection(Boolean activeElection) {
        this.activeElection = activeElection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("create_date")
    public OffsetDateTime createDate;
    public ElectionDate withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_date")
    public LocalDate electionDate;
    public ElectionDate withElectionDate(LocalDate electionDate) {
        this.electionDate = electionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_district")
    public Integer electionDistrict;
    public ElectionDate withElectionDistrict(Integer electionDistrict) {
        this.electionDistrict = electionDistrict;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_notes")
    public String electionNotes;
    public ElectionDate withElectionNotes(String electionNotes) {
        this.electionNotes = electionNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_party")
    public String electionParty;
    public ElectionDate withElectionParty(String electionParty) {
        this.electionParty = electionParty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_state")
    public String electionState;
    public ElectionDate withElectionState(String electionState) {
        this.electionState = electionState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_type_full")
    public String electionTypeFull;
    public ElectionDate withElectionTypeFull(String electionTypeFull) {
        this.electionTypeFull = electionTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_type_id")
    public String electionTypeId;
    public ElectionDate withElectionTypeId(String electionTypeId) {
        this.electionTypeId = electionTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_year")
    public Integer electionYear;
    public ElectionDate withElectionYear(Integer electionYear) {
        this.electionYear = electionYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("office_sought")
    public String officeSought;
    public ElectionDate withOfficeSought(String officeSought) {
        this.officeSought = officeSought;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_general_date")
    public LocalDate primaryGeneralDate;
    public ElectionDate withPrimaryGeneralDate(LocalDate primaryGeneralDate) {
        this.primaryGeneralDate = primaryGeneralDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("update_date")
    public OffsetDateTime updateDate;
    public ElectionDate withUpdateDate(OffsetDateTime updateDate) {
        this.updateDate = updateDate;
        return this;
    }
}