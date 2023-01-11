package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadFunctionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Description")
    public String description;
    public UploadFunctionQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Handler")
    public String handler;
    public UploadFunctionQueryParams withHandler(String handler) {
        this.handler = handler;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MemorySize")
    public Long memorySize;
    public UploadFunctionQueryParams withMemorySize(Long memorySize) {
        this.memorySize = memorySize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Mode")
    public UploadFunctionModeEnum mode;
    public UploadFunctionQueryParams withMode(UploadFunctionModeEnum mode) {
        this.mode = mode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Role")
    public String role;
    public UploadFunctionQueryParams withRole(String role) {
        this.role = role;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Runtime")
    public UploadFunctionRuntimeEnum runtime;
    public UploadFunctionQueryParams withRuntime(UploadFunctionRuntimeEnum runtime) {
        this.runtime = runtime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Timeout")
    public Long timeout;
    public UploadFunctionQueryParams withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
}