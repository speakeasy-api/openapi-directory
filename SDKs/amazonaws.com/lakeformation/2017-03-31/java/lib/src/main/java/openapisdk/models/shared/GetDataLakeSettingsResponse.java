package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDataLakeSettingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataLakeSettings")
    public DataLakeSettings dataLakeSettings;
    public GetDataLakeSettingsResponse withDataLakeSettings(DataLakeSettings dataLakeSettings) {
        this.dataLakeSettings = dataLakeSettings;
        return this;
    }
}