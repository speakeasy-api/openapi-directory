package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebBackendConnectionRequestBody {
    @JsonProperty("connectionId")
    public String connectionId;
    public WebBackendConnectionRequestBody withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("withRefreshedCatalog")
    public Boolean withRefreshedCatalog;
    public WebBackendConnectionRequestBody withWithRefreshedCatalog(Boolean withRefreshedCatalog) {
        this.withRefreshedCatalog = withRefreshedCatalog;
        return this;
    }
}