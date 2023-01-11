package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartBgpFailoverTestResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualInterfaceTest")
    public VirtualInterfaceTestHistory virtualInterfaceTest;
    public StartBgpFailoverTestResponse withVirtualInterfaceTest(VirtualInterfaceTestHistory virtualInterfaceTest) {
        this.virtualInterfaceTest = virtualInterfaceTest;
        return this;
    }
}