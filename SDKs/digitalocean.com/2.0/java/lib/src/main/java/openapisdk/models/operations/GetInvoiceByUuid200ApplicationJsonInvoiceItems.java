package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInvoiceByUuid200ApplicationJsonInvoiceItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public String amount;
    public GetInvoiceByUuid200ApplicationJsonInvoiceItems withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetInvoiceByUuid200ApplicationJsonInvoiceItems withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public GetInvoiceByUuid200ApplicationJsonInvoiceItems withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration_unit")
    public String durationUnit;
    public GetInvoiceByUuid200ApplicationJsonInvoiceItems withDurationUnit(String durationUnit) {
        this.durationUnit = durationUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_time")
    public String endTime;
    public GetInvoiceByUuid200ApplicationJsonInvoiceItems withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_description")
    public String groupDescription;
    public GetInvoiceByUuid200ApplicationJsonInvoiceItems withGroupDescription(String groupDescription) {
        this.groupDescription = groupDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public String product;
    public GetInvoiceByUuid200ApplicationJsonInvoiceItems withProduct(String product) {
        this.product = product;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project_name")
    public String projectName;
    public GetInvoiceByUuid200ApplicationJsonInvoiceItems withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_id")
    public String resourceId;
    public GetInvoiceByUuid200ApplicationJsonInvoiceItems withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_uuid")
    public String resourceUuid;
    public GetInvoiceByUuid200ApplicationJsonInvoiceItems withResourceUuid(String resourceUuid) {
        this.resourceUuid = resourceUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_time")
    public String startTime;
    public GetInvoiceByUuid200ApplicationJsonInvoiceItems withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}