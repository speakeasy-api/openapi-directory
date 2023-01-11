package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GeneralName
 * Describes an ASN.1 X.400 <code>GeneralName</code> as defined in <a href="https://tools.ietf.org/html/rfc5280">RFC 5280</a>. Only one of the following naming options should be provided. Providing more than one option results in an <code>InvalidArgsException</code> error.
**/
public class GeneralName {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryName")
    public Asn1Subject directoryName;
    public GeneralName withDirectoryName(Asn1Subject directoryName) {
        this.directoryName = directoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DnsName")
    public String dnsName;
    public GeneralName withDnsName(String dnsName) {
        this.dnsName = dnsName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EdiPartyName")
    public EdiPartyName ediPartyName;
    public GeneralName withEdiPartyName(EdiPartyName ediPartyName) {
        this.ediPartyName = ediPartyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpAddress")
    public String ipAddress;
    public GeneralName withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OtherName")
    public OtherName otherName;
    public GeneralName withOtherName(OtherName otherName) {
        this.otherName = otherName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegisteredId")
    public String registeredId;
    public GeneralName withRegisteredId(String registeredId) {
        this.registeredId = registeredId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rfc822Name")
    public String rfc822Name;
    public GeneralName withRfc822Name(String rfc822Name) {
        this.rfc822Name = rfc822Name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UniformResourceIdentifier")
    public String uniformResourceIdentifier;
    public GeneralName withUniformResourceIdentifier(String uniformResourceIdentifier) {
        this.uniformResourceIdentifier = uniformResourceIdentifier;
        return this;
    }
}