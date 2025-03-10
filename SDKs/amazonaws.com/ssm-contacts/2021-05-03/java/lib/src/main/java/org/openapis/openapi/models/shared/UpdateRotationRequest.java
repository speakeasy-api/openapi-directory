/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

public class UpdateRotationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContactIds")
    public String[] contactIds;

    public UpdateRotationRequest withContactIds(String[] contactIds) {
        this.contactIds = contactIds;
        return this;
    }
    
    @JsonProperty("Recurrence")
    public RecurrenceSettings recurrence;

    public UpdateRotationRequest withRecurrence(RecurrenceSettings recurrence) {
        this.recurrence = recurrence;
        return this;
    }
    
    @JsonProperty("RotationId")
    public String rotationId;

    public UpdateRotationRequest withRotationId(String rotationId) {
        this.rotationId = rotationId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;

    public UpdateRotationRequest withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeZoneId")
    public String timeZoneId;

    public UpdateRotationRequest withTimeZoneId(String timeZoneId) {
        this.timeZoneId = timeZoneId;
        return this;
    }
    
    public UpdateRotationRequest(@JsonProperty("Recurrence") RecurrenceSettings recurrence, @JsonProperty("RotationId") String rotationId) {
        this.recurrence = recurrence;
        this.rotationId = rotationId;
  }
}
