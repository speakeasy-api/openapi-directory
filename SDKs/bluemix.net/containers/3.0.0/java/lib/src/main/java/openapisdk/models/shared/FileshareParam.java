package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FileshareParam {
    @JsonProperty("fsIOPS")
    public Double fsIOPS;
    public FileshareParam withFsIops(Double fsIOPS) {
        this.fsIOPS = fsIOPS;
        return this;
    }
    @JsonProperty("fsName")
    public String fsName;
    public FileshareParam withFsName(String fsName) {
        this.fsName = fsName;
        return this;
    }
    @JsonProperty("fsSize")
    public Long fsSize;
    public FileshareParam withFsSize(Long fsSize) {
        this.fsSize = fsSize;
        return this;
    }
}