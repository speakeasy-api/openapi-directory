package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateFunctionRequestBodyImageConfig
 * Configuration values that override the container image Dockerfile settings. See <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container settings</a>. 
**/
public class CreateFunctionRequestBodyImageConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Command")
    public String[] command;
    public CreateFunctionRequestBodyImageConfig withCommand(String[] command) {
        this.command = command;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EntryPoint")
    public String[] entryPoint;
    public CreateFunctionRequestBodyImageConfig withEntryPoint(String[] entryPoint) {
        this.entryPoint = entryPoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkingDirectory")
    public String workingDirectory;
    public CreateFunctionRequestBodyImageConfig withWorkingDirectory(String workingDirectory) {
        this.workingDirectory = workingDirectory;
        return this;
    }
}