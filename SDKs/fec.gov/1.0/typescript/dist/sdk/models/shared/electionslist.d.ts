import { SpeakeasyBase } from "../../../internal/utils";
export declare class ElectionsList extends SpeakeasyBase {
    cycle?: number;
    /**
     * Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
     */
    district?: string;
    /**
     * Federal office candidate runs for: H, S or P
     */
    office?: string;
    /**
     * US state or territory
     */
    state?: string;
}
