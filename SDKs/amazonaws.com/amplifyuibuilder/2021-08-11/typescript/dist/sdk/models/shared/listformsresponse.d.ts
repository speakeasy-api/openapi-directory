import { SpeakeasyBase } from "../../../internal/utils";
import { FormSummary } from "./formsummary";
/**
 * Success
 */
export declare class ListFormsResponse extends SpeakeasyBase {
    entities: FormSummary[];
    nextToken?: string;
}
