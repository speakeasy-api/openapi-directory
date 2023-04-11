import { SpeakeasyBase } from "../../../internal/utils";
import { HealthEvent } from "./healthevent";
/**
 * Success
 */
export declare class ListHealthEventsOutput extends SpeakeasyBase {
    healthEvents: HealthEvent[];
    nextToken?: string;
}
