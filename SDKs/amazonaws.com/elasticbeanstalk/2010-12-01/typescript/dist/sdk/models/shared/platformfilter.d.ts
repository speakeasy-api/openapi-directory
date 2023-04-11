import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Describes criteria to restrict the results when listing platform versions.</p> <p>The filter is evaluated as follows: <code>Type Operator Values[1]</code> </p>
 */
export declare class PlatformFilter extends SpeakeasyBase {
    operator?: string;
    type?: string;
    values?: string[];
}
