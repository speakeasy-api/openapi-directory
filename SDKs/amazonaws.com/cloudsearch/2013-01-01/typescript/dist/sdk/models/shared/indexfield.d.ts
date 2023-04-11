import { SpeakeasyBase } from "../../../internal/utils";
import { DateArrayOptions } from "./datearrayoptions";
import { DateOptions } from "./dateoptions";
import { DoubleArrayOptions } from "./doublearrayoptions";
import { DoubleOptions } from "./doubleoptions";
import { IndexFieldTypeEnum } from "./indexfieldtypeenum";
import { IntArrayOptions } from "./intarrayoptions";
import { IntOptions } from "./intoptions";
import { LatLonOptions } from "./latlonoptions";
import { LiteralArrayOptions } from "./literalarrayoptions";
import { LiteralOptions } from "./literaloptions";
import { TextArrayOptions } from "./textarrayoptions";
import { TextOptions } from "./textoptions";
/**
 * Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.
 */
export declare class IndexField extends SpeakeasyBase {
    /**
     * Options for a field that contains an array of dates. Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default.
     */
    dateArrayOptions?: DateArrayOptions;
    /**
     * Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z. Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default.
     */
    dateOptions?: DateOptions;
    /**
     * Options for a field that contains an array of double-precision 64-bit floating point values. Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>. All options are enabled by default.
     */
    doubleArrayOptions?: DoubleArrayOptions;
    /**
     * Options for a double-precision 64-bit floating point field. Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default.
     */
    doubleOptions?: DoubleOptions;
    indexFieldName: string;
    /**
     * The type of field. The valid options for a field depend on the field type. For more information about the supported field types, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    indexFieldType: IndexFieldTypeEnum;
    /**
     * Options for a field that contains an array of 64-bit signed integers. Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default.
     */
    intArrayOptions?: IntArrayOptions;
    /**
     * Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.
     */
    intOptions?: IntOptions;
    /**
     * Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default.
     */
    latLonOptions?: LatLonOptions;
    /**
     * Options for a field that contains an array of literal strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default.
     */
    literalArrayOptions?: LiteralArrayOptions;
    /**
     * Options for literal field. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default.
     */
    literalOptions?: LiteralOptions;
    /**
     * Options for a field that contains an array of text strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.
     */
    textArrayOptions?: TextArrayOptions;
    /**
     * Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.
     */
    textOptions?: TextOptions;
}
