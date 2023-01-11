package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateConnectivityInfoRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectivityInfo")
    public openapisdk.models.shared.ConnectivityInfo[] connectivityInfo;
    public UpdateConnectivityInfoRequestBody withConnectivityInfo(openapisdk.models.shared.ConnectivityInfo[] connectivityInfo) {
        this.connectivityInfo = connectivityInfo;
        return this;
    }
}