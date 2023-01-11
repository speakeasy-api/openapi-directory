package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDataCatalogOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataCatalog")
    public DataCatalog dataCatalog;
    public GetDataCatalogOutput withDataCatalog(DataCatalog dataCatalog) {
        this.dataCatalog = dataCatalog;
        return this;
    }
}