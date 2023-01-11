package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ListOperationsRequest
 * The ListOperations request includes the following elements.
**/
public class ListOperationsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public ListOperationsRequest withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxItems")
    public Long maxItems;
    public ListOperationsRequest withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("SubmittedSince")
    public OffsetDateTime submittedSince;
    public ListOperationsRequest withSubmittedSince(OffsetDateTime submittedSince) {
        this.submittedSince = submittedSince;
        return this;
    }
}