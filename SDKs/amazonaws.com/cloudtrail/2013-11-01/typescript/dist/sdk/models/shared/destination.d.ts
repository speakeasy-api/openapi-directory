import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationTypeEnum } from "./destinationtypeenum";
/**
 * Contains information about the destination receiving events.
 */
export declare class Destination extends SpeakeasyBase {
    location: string;
    type: DestinationTypeEnum;
}
