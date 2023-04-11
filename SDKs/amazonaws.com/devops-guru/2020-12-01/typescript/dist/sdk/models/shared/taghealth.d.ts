import { SpeakeasyBase } from "../../../internal/utils";
import { InsightHealth } from "./insighthealth";
/**
 *  Information about the health of Amazon Web Services resources in your account that are specified by an Amazon Web Services tag <i>key</i>.
 */
export declare class TagHealth extends SpeakeasyBase {
    analyzedResourceCount?: number;
    appBoundaryKey?: string;
    insight?: InsightHealth;
    tagValue?: string;
}
