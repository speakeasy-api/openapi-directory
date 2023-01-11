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
 * EstimatedResourceSize
 * The estimated size of the resource.
**/
public class EstimatedResourceSize {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("estimatedOn")
    public OffsetDateTime estimatedOn;
    public EstimatedResourceSize withEstimatedOn(OffsetDateTime estimatedOn) {
        this.estimatedOn = estimatedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedSizeInBytes")
    public Double estimatedSizeInBytes;
    public EstimatedResourceSize withEstimatedSizeInBytes(Double estimatedSizeInBytes) {
        this.estimatedSizeInBytes = estimatedSizeInBytes;
        return this;
    }
}