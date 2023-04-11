import { SpeakeasyBase } from "../../../internal/utils";
import { ResultFrame } from "./resultframe";
/**
 * <p>The result of a SQL statement.</p> <pre><code> &lt;note&gt; &lt;p&gt;This data structure is only used with the deprecated &lt;code&gt;ExecuteSql&lt;/code&gt; operation. Use the &lt;code&gt;BatchExecuteStatement&lt;/code&gt; or &lt;code&gt;ExecuteStatement&lt;/code&gt; operation instead.&lt;/p&gt; &lt;/note&gt; </code></pre>
 */
export declare class SqlStatementResult extends SpeakeasyBase {
    numberOfRecordsUpdated?: number;
    resultFrame?: ResultFrame;
}
