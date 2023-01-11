package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Payroll {
    @JsonProperty("check_date")
    public String checkDate;
    public Payroll withCheckDate(String checkDate) {
        this.checkDate = checkDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company_id")
    public String companyId;
    public Payroll withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compensations")
    public Compensation[] compensations;
    public Payroll withCompensations(Compensation[] compensations) {
        this.compensations = compensations;
        return this;
    }
    @JsonProperty("end_date")
    public String endDate;
    public Payroll withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Payroll withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("processed")
    public Boolean processed;
    public Payroll withProcessed(Boolean processed) {
        this.processed = processed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processed_date")
    public String processedDate;
    public Payroll withProcessedDate(String processedDate) {
        this.processedDate = processedDate;
        return this;
    }
    @JsonProperty("start_date")
    public String startDate;
    public Payroll withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totals")
    public PayrollTotals totals;
    public Payroll withTotals(PayrollTotals totals) {
        this.totals = totals;
        return this;
    }
}