import { SpeakeasyBase } from "../../../internal/utils";
import { NavEntry } from "./naventry";
export declare class Navigation extends SpeakeasyBase {
    account?: NavEntry;
    /**
     * Copyright information.
     */
    copyright?: string;
    /**
     * A map of custom fields defined by a curator for navigation.
     */
    customFields?: Record<string, any>;
    footer?: NavEntry;
    /**
     * The header navigation.
     */
    header: NavEntry[];
    mobile?: NavEntry;
}
