import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The criteria to use in the filter that defines the archive rule. For more information on available filter keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a>.
 */
export declare class Criterion extends SpeakeasyBase {
    contains?: string[];
    eq?: string[];
    exists?: boolean;
    neq?: string[];
}
