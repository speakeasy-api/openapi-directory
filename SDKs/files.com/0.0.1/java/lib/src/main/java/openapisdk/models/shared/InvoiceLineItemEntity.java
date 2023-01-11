package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class InvoiceLineItemEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public InvoiceLineItemEntity withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public InvoiceLineItemEntity withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public InvoiceLineItemEntity withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan")
    public String plan;
    public InvoiceLineItemEntity withPlan(String plan) {
        this.plan = plan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("service_end_at")
    public OffsetDateTime serviceEndAt;
    public InvoiceLineItemEntity withServiceEndAt(OffsetDateTime serviceEndAt) {
        this.serviceEndAt = serviceEndAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("service_start_at")
    public OffsetDateTime serviceStartAt;
    public InvoiceLineItemEntity withServiceStartAt(OffsetDateTime serviceStartAt) {
        this.serviceStartAt = serviceStartAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public String site;
    public InvoiceLineItemEntity withSite(String site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public InvoiceLineItemEntityTypeEnum type;
    public InvoiceLineItemEntity withType(InvoiceLineItemEntityTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public InvoiceLineItemEntity withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}