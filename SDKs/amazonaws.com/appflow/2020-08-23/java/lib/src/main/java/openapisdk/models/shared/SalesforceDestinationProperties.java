package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SalesforceDestinationProperties
 *  The properties that are applied when Salesforce is being used as a destination. 
**/
public class SalesforceDestinationProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorHandlingConfig")
    public ErrorHandlingConfig errorHandlingConfig;
    public SalesforceDestinationProperties withErrorHandlingConfig(ErrorHandlingConfig errorHandlingConfig) {
        this.errorHandlingConfig = errorHandlingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idFieldNames")
    public String[] idFieldNames;
    public SalesforceDestinationProperties withIdFieldNames(String[] idFieldNames) {
        this.idFieldNames = idFieldNames;
        return this;
    }
    @JsonProperty("object")
    public String object;
    public SalesforceDestinationProperties withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("writeOperationType")
    public WriteOperationTypeEnum writeOperationType;
    public SalesforceDestinationProperties withWriteOperationType(WriteOperationTypeEnum writeOperationType) {
        this.writeOperationType = writeOperationType;
        return this;
    }
}