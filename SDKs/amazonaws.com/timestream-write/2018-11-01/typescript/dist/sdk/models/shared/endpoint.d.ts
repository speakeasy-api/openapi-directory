import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an available endpoint against which to make API calls against, as well as the TTL for that endpoint.
 */
export declare class Endpoint extends SpeakeasyBase {
    address: string;
    cachePeriodInMinutes: number;
}
