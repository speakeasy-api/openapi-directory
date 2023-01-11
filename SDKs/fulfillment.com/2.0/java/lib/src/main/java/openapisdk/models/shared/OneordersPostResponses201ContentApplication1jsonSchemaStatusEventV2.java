package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy createdBy;
    public OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2 withCreatedBy(OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date")
    public OffsetDateTime date;
    public OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2 withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2 withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2 withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2 status;
    public OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2 withStatus(OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2 status) {
        this.status = status;
        return this;
    }
}