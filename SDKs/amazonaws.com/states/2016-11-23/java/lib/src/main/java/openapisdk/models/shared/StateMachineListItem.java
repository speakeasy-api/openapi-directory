package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * StateMachineListItem
 * Contains details about the state machine.
**/
public class StateMachineListItem {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public StateMachineListItem withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public StateMachineListItem withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("stateMachineArn")
    public String stateMachineArn;
    public StateMachineListItem withStateMachineArn(String stateMachineArn) {
        this.stateMachineArn = stateMachineArn;
        return this;
    }
    @JsonProperty("type")
    public StateMachineTypeEnum type;
    public StateMachineListItem withType(StateMachineTypeEnum type) {
        this.type = type;
        return this;
    }
}