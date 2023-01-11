package openapisdk.models.shared;



/**
 * IndexField
 * Defines a field in the index, including its name, type, and the source of its data. The <code>IndexFieldType</code> indicates which of the options will be present. It is invalid to specify options for a type other than the <code>IndexFieldType</code>.
**/
public class IndexField {
    public String indexFieldName;
    public IndexField withIndexFieldName(String indexFieldName) {
        this.indexFieldName = indexFieldName;
        return this;
    }
    public IndexFieldTypeEnum indexFieldType;
    public IndexField withIndexFieldType(IndexFieldTypeEnum indexFieldType) {
        this.indexFieldType = indexFieldType;
        return this;
    }
    public LiteralOptions literalOptions;
    public IndexField withLiteralOptions(LiteralOptions literalOptions) {
        this.literalOptions = literalOptions;
        return this;
    }
    public SourceAttribute[] sourceAttributes;
    public IndexField withSourceAttributes(SourceAttribute[] sourceAttributes) {
        this.sourceAttributes = sourceAttributes;
        return this;
    }
    public TextOptions textOptions;
    public IndexField withTextOptions(TextOptions textOptions) {
        this.textOptions = textOptions;
        return this;
    }
    public UIntOptions uIntOptions;
    public IndexField withUIntOptions(UIntOptions uIntOptions) {
        this.uIntOptions = uIntOptions;
        return this;
    }
}