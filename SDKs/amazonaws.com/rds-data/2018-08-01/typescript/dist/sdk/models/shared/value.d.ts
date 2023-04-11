import { SpeakeasyBase } from "../../../internal/utils";
import { StructValue } from "./structvalue";
/**
 * <p>Contains the value of a column.</p> <pre><code> &lt;note&gt; &lt;p&gt;This data structure is only used with the deprecated &lt;code&gt;ExecuteSql&lt;/code&gt; operation. Use the &lt;code&gt;BatchExecuteStatement&lt;/code&gt; or &lt;code&gt;ExecuteStatement&lt;/code&gt; operation instead.&lt;/p&gt; &lt;/note&gt; </code></pre>
 */
export declare class Value extends SpeakeasyBase {
    arrayValues?: Value[];
    bigIntValue?: number;
    bitValue?: boolean;
    blobValue?: string;
    doubleValue?: number;
    intValue?: number;
    isNull?: boolean;
    realValue?: number;
    stringValue?: string;
    structValue?: StructValue;
}
