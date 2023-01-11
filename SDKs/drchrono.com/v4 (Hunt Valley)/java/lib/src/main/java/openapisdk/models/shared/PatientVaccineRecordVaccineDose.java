package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatientVaccineRecordVaccineDose
 * Vaccine dose ID
**/
public class PatientVaccineRecordVaccineDose {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PatientVaccineRecordVaccineDose withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_age_months")
    public Long maxAgeMonths;
    public PatientVaccineRecordVaccineDose withMaxAgeMonths(Long maxAgeMonths) {
        this.maxAgeMonths = maxAgeMonths;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("min_age_months")
    public Long minAgeMonths;
    public PatientVaccineRecordVaccineDose withMinAgeMonths(Long minAgeMonths) {
        this.minAgeMonths = minAgeMonths;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public PatientVaccineRecordVaccineDose withTitle(String title) {
        this.title = title;
        return this;
    }
}