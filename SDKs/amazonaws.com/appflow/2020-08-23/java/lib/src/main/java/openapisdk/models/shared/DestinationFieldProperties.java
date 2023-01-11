package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DestinationFieldProperties
 *  The properties that can be applied to a field when connector is being used as a destination. 
**/
public class DestinationFieldProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isCreatable")
    public Boolean isCreatable;
    public DestinationFieldProperties withIsCreatable(Boolean isCreatable) {
        this.isCreatable = isCreatable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isNullable")
    public Boolean isNullable;
    public DestinationFieldProperties withIsNullable(Boolean isNullable) {
        this.isNullable = isNullable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isUpdatable")
    public Boolean isUpdatable;
    public DestinationFieldProperties withIsUpdatable(Boolean isUpdatable) {
        this.isUpdatable = isUpdatable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isUpsertable")
    public Boolean isUpsertable;
    public DestinationFieldProperties withIsUpsertable(Boolean isUpsertable) {
        this.isUpsertable = isUpsertable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedWriteOperations")
    public WriteOperationTypeEnum[] supportedWriteOperations;
    public DestinationFieldProperties withSupportedWriteOperations(WriteOperationTypeEnum[] supportedWriteOperations) {
        this.supportedWriteOperations = supportedWriteOperations;
        return this;
    }
}