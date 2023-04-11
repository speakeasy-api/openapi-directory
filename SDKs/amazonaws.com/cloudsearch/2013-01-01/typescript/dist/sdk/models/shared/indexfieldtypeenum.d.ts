/**
 * The type of field. The valid options for a field depend on the field type. For more information about the supported field types, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.
 */
export declare enum IndexFieldTypeEnum {
    Int = "int",
    Double = "double",
    Literal = "literal",
    Text = "text",
    Date = "date",
    Latlon = "latlon",
    IntArray = "int-array",
    DoubleArray = "double-array",
    LiteralArray = "literal-array",
    TextArray = "text-array",
    DateArray = "date-array"
}
