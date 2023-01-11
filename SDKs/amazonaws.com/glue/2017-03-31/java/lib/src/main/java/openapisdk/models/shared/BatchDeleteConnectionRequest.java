package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchDeleteConnectionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public BatchDeleteConnectionRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("ConnectionNameList")
    public String[] connectionNameList;
    public BatchDeleteConnectionRequest withConnectionNameList(String[] connectionNameList) {
        this.connectionNameList = connectionNameList;
        return this;
    }
}