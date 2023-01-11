package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Coverage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appointment")
    public String appointment;
    public Coverage withAppointment(String appointment) {
        this.appointment = appointment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cob_level")
    public String cobLevel;
    public Coverage withCobLevel(String cobLevel) {
        this.cobLevel = cobLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverage_details")
    public String coverageDetails;
    public Coverage withCoverageDetails(String coverageDetails) {
        this.coverageDetails = coverageDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverage_subscriber")
    public String coverageSubscriber;
    public Coverage withCoverageSubscriber(String coverageSubscriber) {
        this.coverageSubscriber = coverageSubscriber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eligibility")
    public String eligibility;
    public Coverage withEligibility(String eligibility) {
        this.eligibility = eligibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patient")
    public String patient;
    public Coverage withPatient(String patient) {
        this.patient = patient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payer_name")
    public String payerName;
    public Coverage withPayerName(String payerName) {
        this.payerName = payerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_date")
    public String queryDate;
    public Coverage withQueryDate(String queryDate) {
        this.queryDate = queryDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_service_type")
    public CoverageRequestServiceTypeEnum requestServiceType;
    public Coverage withRequestServiceType(CoverageRequestServiceTypeEnum requestServiceType) {
        this.requestServiceType = requestServiceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_type_description")
    public String serviceTypeDescription;
    public Coverage withServiceTypeDescription(String serviceTypeDescription) {
        this.serviceTypeDescription = serviceTypeDescription;
        return this;
    }
}