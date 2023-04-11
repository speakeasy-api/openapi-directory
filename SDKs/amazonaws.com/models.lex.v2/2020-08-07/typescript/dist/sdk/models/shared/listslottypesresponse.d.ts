import { SpeakeasyBase } from "../../../internal/utils";
import { SlotTypeSummary } from "./slottypesummary";
/**
 * Success
 */
export declare class ListSlotTypesResponse extends SpeakeasyBase {
    botId?: string;
    botVersion?: string;
    localeId?: string;
    nextToken?: string;
    slotTypeSummaries?: SlotTypeSummary[];
}
