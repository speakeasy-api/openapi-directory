package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCertificates200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificates")
    public ListCertificates200ApplicationJsonCertificates[] certificates;
    public ListCertificates200ApplicationJson withCertificates(ListCertificates200ApplicationJsonCertificates[] certificates) {
        this.certificates = certificates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListCertificates200ApplicationJsonLinks links;
    public ListCertificates200ApplicationJson withLinks(ListCertificates200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListCertificates200ApplicationJsonMeta meta;
    public ListCertificates200ApplicationJson withMeta(ListCertificates200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}