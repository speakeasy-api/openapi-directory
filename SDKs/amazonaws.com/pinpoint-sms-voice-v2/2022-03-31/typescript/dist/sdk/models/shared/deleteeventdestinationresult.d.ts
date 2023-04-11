import { SpeakeasyBase } from "../../../internal/utils";
import { EventDestination } from "./eventdestination";
/**
 * Success
 */
export declare class DeleteEventDestinationResult extends SpeakeasyBase {
    configurationSetArn?: string;
    configurationSetName?: string;
    eventDestination?: EventDestination;
}
