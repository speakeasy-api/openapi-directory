package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateTaskRequestBodyCommand
 * The command given to the device to execute.
**/
public class CreateTaskRequestBodyCommand {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reboot")
    public java.util.Map<String, Object> reboot;
    public CreateTaskRequestBodyCommand withReboot(java.util.Map<String, Object> reboot) {
        this.reboot = reboot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unlock")
    public java.util.Map<String, Object> unlock;
    public CreateTaskRequestBodyCommand withUnlock(java.util.Map<String, Object> unlock) {
        this.unlock = unlock;
        return this;
    }
}