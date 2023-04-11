import { SpeakeasyBase } from "../../../internal/utils";
import { CoverageMapComparisonEnum } from "./coveragemapcomparisonenum";
/**
 * Contains details of a coverage map filter.
 */
export declare class CoverageMapFilter extends SpeakeasyBase {
    comparison: CoverageMapComparisonEnum;
    key: string;
    value?: string;
}
