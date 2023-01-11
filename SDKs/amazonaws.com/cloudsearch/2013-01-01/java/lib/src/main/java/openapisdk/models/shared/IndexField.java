package openapisdk.models.shared;



/**
 * IndexField
 * Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.
**/
public class IndexField {
    public DateArrayOptions dateArrayOptions;
    public IndexField withDateArrayOptions(DateArrayOptions dateArrayOptions) {
        this.dateArrayOptions = dateArrayOptions;
        return this;
    }
    public DateOptions dateOptions;
    public IndexField withDateOptions(DateOptions dateOptions) {
        this.dateOptions = dateOptions;
        return this;
    }
    public DoubleArrayOptions doubleArrayOptions;
    public IndexField withDoubleArrayOptions(DoubleArrayOptions doubleArrayOptions) {
        this.doubleArrayOptions = doubleArrayOptions;
        return this;
    }
    public DoubleOptions doubleOptions;
    public IndexField withDoubleOptions(DoubleOptions doubleOptions) {
        this.doubleOptions = doubleOptions;
        return this;
    }
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
    public IntArrayOptions intArrayOptions;
    public IndexField withIntArrayOptions(IntArrayOptions intArrayOptions) {
        this.intArrayOptions = intArrayOptions;
        return this;
    }
    public IntOptions intOptions;
    public IndexField withIntOptions(IntOptions intOptions) {
        this.intOptions = intOptions;
        return this;
    }
    public LatLonOptions latLonOptions;
    public IndexField withLatLonOptions(LatLonOptions latLonOptions) {
        this.latLonOptions = latLonOptions;
        return this;
    }
    public LiteralArrayOptions literalArrayOptions;
    public IndexField withLiteralArrayOptions(LiteralArrayOptions literalArrayOptions) {
        this.literalArrayOptions = literalArrayOptions;
        return this;
    }
    public LiteralOptions literalOptions;
    public IndexField withLiteralOptions(LiteralOptions literalOptions) {
        this.literalOptions = literalOptions;
        return this;
    }
    public TextArrayOptions textArrayOptions;
    public IndexField withTextArrayOptions(TextArrayOptions textArrayOptions) {
        this.textArrayOptions = textArrayOptions;
        return this;
    }
    public TextOptions textOptions;
    public IndexField withTextOptions(TextOptions textOptions) {
        this.textOptions = textOptions;
        return this;
    }
}