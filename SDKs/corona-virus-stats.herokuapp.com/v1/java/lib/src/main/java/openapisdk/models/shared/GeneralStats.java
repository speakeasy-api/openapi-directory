package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GeneralStats {
    @JsonProperty("cases_with_outcome")
    public Long casesWithOutcome;
    public GeneralStats withCasesWithOutcome(Long casesWithOutcome) {
        this.casesWithOutcome = casesWithOutcome;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public GeneralStats withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("critical_condition_active_cases")
    public Long criticalConditionActiveCases;
    public GeneralStats withCriticalConditionActiveCases(Long criticalConditionActiveCases) {
        this.criticalConditionActiveCases = criticalConditionActiveCases;
        return this;
    }
    @JsonProperty("currently_infected")
    public Long currentlyInfected;
    public GeneralStats withCurrentlyInfected(Long currentlyInfected) {
        this.currentlyInfected = currentlyInfected;
        return this;
    }
    @JsonProperty("death_cases")
    public Long deathCases;
    public GeneralStats withDeathCases(Long deathCases) {
        this.deathCases = deathCases;
        return this;
    }
    @JsonProperty("death_closed_cases")
    public Long deathClosedCases;
    public GeneralStats withDeathClosedCases(Long deathClosedCases) {
        this.deathClosedCases = deathClosedCases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public GeneralStats withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GeneralStats withId(String id) {
        this.id = id;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("last_update")
    public OffsetDateTime lastUpdate;
    public GeneralStats withLastUpdate(OffsetDateTime lastUpdate) {
        this.lastUpdate = lastUpdate;
        return this;
    }
    @JsonProperty("mild_condition_active_cases")
    public Long mildConditionActiveCases;
    public GeneralStats withMildConditionActiveCases(Long mildConditionActiveCases) {
        this.mildConditionActiveCases = mildConditionActiveCases;
        return this;
    }
    @JsonProperty("recovered_closed_cases")
    public Long recoveredClosedCases;
    public GeneralStats withRecoveredClosedCases(Long recoveredClosedCases) {
        this.recoveredClosedCases = recoveredClosedCases;
        return this;
    }
    @JsonProperty("recovery_cases")
    public Long recoveryCases;
    public GeneralStats withRecoveryCases(Long recoveryCases) {
        this.recoveryCases = recoveryCases;
        return this;
    }
    @JsonProperty("total_cases")
    public Long totalCases;
    public GeneralStats withTotalCases(Long totalCases) {
        this.totalCases = totalCases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public GeneralStats withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}