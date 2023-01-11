package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppointmentSystemVitals
 * Clinical vitals associated with the appointment
**/
public class AppointmentSystemVitals {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blood_pressure_1")
    public Long bloodPressure1;
    public AppointmentSystemVitals withBloodPressure1(Long bloodPressure1) {
        this.bloodPressure1 = bloodPressure1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blood_pressure_2")
    public Long bloodPressure2;
    public AppointmentSystemVitals withBloodPressure2(Long bloodPressure2) {
        this.bloodPressure2 = bloodPressure2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bmi")
    public String bmi;
    public AppointmentSystemVitals withBmi(String bmi) {
        this.bmi = bmi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("head_circumference")
    public Double headCircumference;
    public AppointmentSystemVitals withHeadCircumference(Double headCircumference) {
        this.headCircumference = headCircumference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("head_circumference_units")
    public String headCircumferenceUnits;
    public AppointmentSystemVitals withHeadCircumferenceUnits(String headCircumferenceUnits) {
        this.headCircumferenceUnits = headCircumferenceUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Double height;
    public AppointmentSystemVitals withHeight(Double height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height_units")
    public String heightUnits;
    public AppointmentSystemVitals withHeightUnits(String heightUnits) {
        this.heightUnits = heightUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oxygen_saturation")
    public Double oxygenSaturation;
    public AppointmentSystemVitals withOxygenSaturation(Double oxygenSaturation) {
        this.oxygenSaturation = oxygenSaturation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pain")
    public String pain;
    public AppointmentSystemVitals withPain(String pain) {
        this.pain = pain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pulse")
    public Long pulse;
    public AppointmentSystemVitals withPulse(Long pulse) {
        this.pulse = pulse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("respiratory_rate")
    public Long respiratoryRate;
    public AppointmentSystemVitals withRespiratoryRate(Long respiratoryRate) {
        this.respiratoryRate = respiratoryRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smoking_status")
    public AppointmentSystemVitalsSmokingStatusEnum smokingStatus;
    public AppointmentSystemVitals withSmokingStatus(AppointmentSystemVitalsSmokingStatusEnum smokingStatus) {
        this.smokingStatus = smokingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("temperature")
    public Double temperature;
    public AppointmentSystemVitals withTemperature(Double temperature) {
        this.temperature = temperature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("temperature_units")
    public String temperatureUnits;
    public AppointmentSystemVitals withTemperatureUnits(String temperatureUnits) {
        this.temperatureUnits = temperatureUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Double weight;
    public AppointmentSystemVitals withWeight(Double weight) {
        this.weight = weight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight_units")
    public String weightUnits;
    public AppointmentSystemVitals withWeightUnits(String weightUnits) {
        this.weightUnits = weightUnits;
        return this;
    }
}