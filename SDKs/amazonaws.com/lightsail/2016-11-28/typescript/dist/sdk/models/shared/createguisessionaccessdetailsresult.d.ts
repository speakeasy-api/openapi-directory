import { SpeakeasyBase } from "../../../internal/utils";
import { Session } from "./session";
import { StatusEnum } from "./statusenum";
/**
 * Success
 */
export declare class CreateGUISessionAccessDetailsResult extends SpeakeasyBase {
    failureReason?: string;
    percentageComplete?: number;
    resourceName?: string;
    sessions?: Session[];
    status?: StatusEnum;
}
