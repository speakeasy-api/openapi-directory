package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListCertificates200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListCertificates200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListCertificates200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}