package openapisdk.models.shared;



public class AttributeList {
    public java.util.Map<String, Object> alternateNameEncoding;
    public AttributeList withAlternateNameEncoding(java.util.Map<String, Object> alternateNameEncoding) {
        this.alternateNameEncoding = alternateNameEncoding;
        return this;
    }
    public java.util.Map<String, Object> alternateValueEncoding;
    public AttributeList withAlternateValueEncoding(java.util.Map<String, Object> alternateValueEncoding) {
        this.alternateValueEncoding = alternateValueEncoding;
        return this;
    }
    public String name;
    public AttributeList withName(String name) {
        this.name = name;
        return this;
    }
    public String value;
    public AttributeList withValue(String value) {
        this.value = value;
        return this;
    }
}