package openapisdk.models.shared;



public class ItemList {
    public java.util.Map<String, Object> alternateNameEncoding;
    public ItemList withAlternateNameEncoding(java.util.Map<String, Object> alternateNameEncoding) {
        this.alternateNameEncoding = alternateNameEncoding;
        return this;
    }
    public AttributeList[] attributes;
    public ItemList withAttributes(AttributeList[] attributes) {
        this.attributes = attributes;
        return this;
    }
    public String name;
    public ItemList withName(String name) {
        this.name = name;
        return this;
    }
}