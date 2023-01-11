package openapisdk.models.shared;



public class MessageAttributeValue {
    public java.util.Map<String, Object> binaryListValues;
    public MessageAttributeValue withBinaryListValues(java.util.Map<String, Object> binaryListValues) {
        this.binaryListValues = binaryListValues;
        return this;
    }
    public String binaryValue;
    public MessageAttributeValue withBinaryValue(String binaryValue) {
        this.binaryValue = binaryValue;
        return this;
    }
    public String dataType;
    public MessageAttributeValue withDataType(String dataType) {
        this.dataType = dataType;
        return this;
    }
    public java.util.Map<String, Object> stringListValues;
    public MessageAttributeValue withStringListValues(java.util.Map<String, Object> stringListValues) {
        this.stringListValues = stringListValues;
        return this;
    }
    public String stringValue;
    public MessageAttributeValue withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
}