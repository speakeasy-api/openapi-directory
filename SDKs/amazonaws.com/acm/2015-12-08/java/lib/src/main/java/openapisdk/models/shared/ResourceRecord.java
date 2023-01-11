package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResourceRecord
 * Contains a DNS record value that you can use to validate ownership or control of a domain. This is used by the <a>DescribeCertificate</a> action. 
**/
public class ResourceRecord {
    @JsonProperty("Name")
    public String name;
    public ResourceRecord withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Type")
    public RecordTypeEnum type;
    public ResourceRecord withType(RecordTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("Value")
    public String value;
    public ResourceRecord withValue(String value) {
        this.value = value;
        return this;
    }
}