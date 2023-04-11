import { SpeakeasyBase } from "../../../internal/utils";
import { PersonasSummary } from "./personassummary";
/**
 * Success
 */
export declare class ListEntityPersonasResponse extends SpeakeasyBase {
    nextToken?: string;
    summaryItems?: PersonasSummary[];
}
