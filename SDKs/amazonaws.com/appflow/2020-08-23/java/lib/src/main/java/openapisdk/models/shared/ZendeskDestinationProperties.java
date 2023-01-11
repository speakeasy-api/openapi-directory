package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ZendeskDestinationProperties
 * The properties that are applied when Zendesk is used as a destination.
**/
public class ZendeskDestinationProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorHandlingConfig")
    public ErrorHandlingConfig errorHandlingConfig;
    public ZendeskDestinationProperties withErrorHandlingConfig(ErrorHandlingConfig errorHandlingConfig) {
        this.errorHandlingConfig = errorHandlingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idFieldNames")
    public String[] idFieldNames;
    public ZendeskDestinationProperties withIdFieldNames(String[] idFieldNames) {
        this.idFieldNames = idFieldNames;
        return this;
    }
    @JsonProperty("object")
    public String object;
    public ZendeskDestinationProperties withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("writeOperationType")
    public WriteOperationTypeEnum writeOperationType;
    public ZendeskDestinationProperties withWriteOperationType(WriteOperationTypeEnum writeOperationType) {
        this.writeOperationType = writeOperationType;
        return this;
    }
}