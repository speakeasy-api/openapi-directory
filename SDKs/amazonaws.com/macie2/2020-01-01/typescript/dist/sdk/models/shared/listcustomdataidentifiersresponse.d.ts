import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDataIdentifierSummary } from "./customdataidentifiersummary";
/**
 * Success
 */
export declare class ListCustomDataIdentifiersResponse extends SpeakeasyBase {
    items?: CustomDataIdentifierSummary[];
    nextToken?: string;
}
