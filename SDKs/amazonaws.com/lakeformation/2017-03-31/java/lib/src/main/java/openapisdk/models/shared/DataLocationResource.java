package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataLocationResource
 * A structure for a data location object where permissions are granted or revoked. 
**/
public class DataLocationResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public DataLocationResource withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public DataLocationResource withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}