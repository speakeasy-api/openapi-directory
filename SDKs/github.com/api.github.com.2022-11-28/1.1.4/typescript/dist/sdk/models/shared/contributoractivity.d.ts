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
     * A GitHub user.
     */
    author: NullableSimpleUser;
    total: number;
    weeks: ContributorActivityWeeks[];
}
