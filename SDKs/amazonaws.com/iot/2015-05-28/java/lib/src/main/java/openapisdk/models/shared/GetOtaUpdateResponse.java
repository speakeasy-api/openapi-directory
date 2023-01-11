package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOtaUpdateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otaUpdateInfo")
    public OtaUpdateInfo otaUpdateInfo;
    public GetOtaUpdateResponse withOtaUpdateInfo(OtaUpdateInfo otaUpdateInfo) {
        this.otaUpdateInfo = otaUpdateInfo;
        return this;
    }
}