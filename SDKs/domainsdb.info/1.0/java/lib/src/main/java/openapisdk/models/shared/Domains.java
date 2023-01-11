package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Domains {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("A")
    public String[] a;
    public Domains withA(String[] a) {
        this.a = a;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CNAME")
    public String[] cname;
    public Domains withCname(String[] cname) {
        this.cname = cname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MX")
    public MxRecords[] mx;
    public Domains withMx(MxRecords[] mx) {
        this.mx = mx;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NS")
    public String[] ns;
    public Domains withNs(String[] ns) {
        this.ns = ns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TXT")
    public String[] txt;
    public Domains withTxt(String[] txt) {
        this.txt = txt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public Domains withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("create_date")
    public OffsetDateTime createDate;
    public Domains withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public Domains withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDead")
    public String isDead;
    public Domains withIsDead(String isDead) {
        this.isDead = isDead;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("update_date")
    public OffsetDateTime updateDate;
    public Domains withUpdateDate(OffsetDateTime updateDate) {
        this.updateDate = updateDate;
        return this;
    }
}