package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFunctionConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Description")
    public String description;
    public UpdateFunctionConfigurationQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Handler")
    public String handler;
    public UpdateFunctionConfigurationQueryParams withHandler(String handler) {
        this.handler = handler;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MemorySize")
    public Long memorySize;
    public UpdateFunctionConfigurationQueryParams withMemorySize(Long memorySize) {
        this.memorySize = memorySize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Role")
    public String role;
    public UpdateFunctionConfigurationQueryParams withRole(String role) {
        this.role = role;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Timeout")
    public Long timeout;
    public UpdateFunctionConfigurationQueryParams withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
}