package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ListCertificates200ApplicationJsonCertificates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ListCertificates200ApplicationJsonCertificates withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dns_names")
    public String[] dnsNames;
    public ListCertificates200ApplicationJsonCertificates withDnsNames(String[] dnsNames) {
        this.dnsNames = dnsNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListCertificates200ApplicationJsonCertificates withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListCertificates200ApplicationJsonCertificates withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("not_after")
    public OffsetDateTime notAfter;
    public ListCertificates200ApplicationJsonCertificates withNotAfter(OffsetDateTime notAfter) {
        this.notAfter = notAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha1_fingerprint")
    public String sha1Fingerprint;
    public ListCertificates200ApplicationJsonCertificates withSha1Fingerprint(String sha1Fingerprint) {
        this.sha1Fingerprint = sha1Fingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ListCertificates200ApplicationJsonCertificatesStateEnum state;
    public ListCertificates200ApplicationJsonCertificates withState(ListCertificates200ApplicationJsonCertificatesStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ListCertificates200ApplicationJsonCertificatesTypeEnum type;
    public ListCertificates200ApplicationJsonCertificates withType(ListCertificates200ApplicationJsonCertificatesTypeEnum type) {
        this.type = type;
        return this;
    }
}