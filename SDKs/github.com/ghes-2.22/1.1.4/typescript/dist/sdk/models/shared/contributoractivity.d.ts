import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
export declare class ContributorActivityWeeks extends SpeakeasyBase {
    a?: number;
    c?: number;
    d?: number;
    w?: number;
}
/**
 * Contributor Activity
 */
export declare class ContributorActivity extends SpeakeasyBase {
    /**
     * Simple User
     */
    author: NullableSimpleUser;
    total: number;
    weeks: ContributorActivityWeeks[];
}
