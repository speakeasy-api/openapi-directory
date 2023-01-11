package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Tag
 * Tag
**/
public class Tag {
    @JsonProperty("$id")
    public String dollarId;
    public Tag withDollarId(String dollarId) {
        this.dollarId = dollarId;
        return this;
    }
    @JsonProperty("command")
    public String command;
    public Tag withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("dateCreated")
    public Integer dateCreated;
    public Tag withDateCreated(Integer dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonProperty("functionId")
    public String functionId;
    public Tag withFunctionId(String functionId) {
        this.functionId = functionId;
        return this;
    }
    @JsonProperty("size")
    public String size;
    public Tag withSize(String size) {
        this.size = size;
        return this;
    }
}