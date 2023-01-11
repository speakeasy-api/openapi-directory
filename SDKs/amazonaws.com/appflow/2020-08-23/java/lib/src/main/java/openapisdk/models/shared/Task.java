package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Task
 *  A class for modeling different type of tasks. Task implementation varies based on the <code>TaskType</code>. 
**/
public class Task {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorOperator")
    public ConnectorOperator connectorOperator;
    public Task withConnectorOperator(ConnectorOperator connectorOperator) {
        this.connectorOperator = connectorOperator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationField")
    public String destinationField;
    public Task withDestinationField(String destinationField) {
        this.destinationField = destinationField;
        return this;
    }
    @JsonProperty("sourceFields")
    public String[] sourceFields;
    public Task withSourceFields(String[] sourceFields) {
        this.sourceFields = sourceFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskProperties")
    public java.util.Map<String, String> taskProperties;
    public Task withTaskProperties(java.util.Map<String, String> taskProperties) {
        this.taskProperties = taskProperties;
        return this;
    }
    @JsonProperty("taskType")
    public TaskTypeEnum taskType;
    public Task withTaskType(TaskTypeEnum taskType) {
        this.taskType = taskType;
        return this;
    }
}