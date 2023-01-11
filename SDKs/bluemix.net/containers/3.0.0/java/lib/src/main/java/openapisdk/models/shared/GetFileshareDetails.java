package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFileshareDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fs")
    public Fileshare[] fs;
    public GetFileshareDetails withFs(Fileshare[] fs) {
        this.fs = fs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fsUsage")
    public FileshareUsage[] fsUsage;
    public GetFileshareDetails withFsUsage(FileshareUsage[] fsUsage) {
        this.fsUsage = fsUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volnames")
    public String[] volnames;
    public GetFileshareDetails withVolnames(String[] volnames) {
        this.volnames = volnames;
        return this;
    }
}