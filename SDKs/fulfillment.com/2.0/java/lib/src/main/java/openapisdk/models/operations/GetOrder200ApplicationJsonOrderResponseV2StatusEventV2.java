package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetOrder200ApplicationJsonOrderResponseV2StatusEventV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public openapisdk.models.shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy createdBy;
    public GetOrder200ApplicationJsonOrderResponseV2StatusEventV2 withCreatedBy(openapisdk.models.shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date")
    public OffsetDateTime date;
    public GetOrder200ApplicationJsonOrderResponseV2StatusEventV2 withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetOrder200ApplicationJsonOrderResponseV2StatusEventV2 withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public GetOrder200ApplicationJsonOrderResponseV2StatusEventV2 withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2 status;
    public GetOrder200ApplicationJsonOrderResponseV2StatusEventV2 withStatus(GetOrder200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2 status) {
        this.status = status;
        return this;
    }
}