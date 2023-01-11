package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CarePlan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appointment")
    public String appointment;
    public CarePlan withAppointment(String appointment) {
        this.appointment = appointment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public CarePlan withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code_system")
    public String codeSystem;
    public CarePlan withCodeSystem(String codeSystem) {
        this.codeSystem = codeSystem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public CarePlan withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CarePlan withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public CarePlan withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instructions")
    public String instructions;
    public CarePlan withInstructions(String instructions) {
        this.instructions = instructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patient")
    public String patient;
    public CarePlan withPatient(String patient) {
        this.patient = patient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_type")
    public CarePlanPlanTypeEnum planType;
    public CarePlan withPlanType(CarePlanPlanTypeEnum planType) {
        this.planType = planType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduled_date")
    public String scheduledDate;
    public CarePlan withScheduledDate(String scheduledDate) {
        this.scheduledDate = scheduledDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public CarePlan withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public CarePlan withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}