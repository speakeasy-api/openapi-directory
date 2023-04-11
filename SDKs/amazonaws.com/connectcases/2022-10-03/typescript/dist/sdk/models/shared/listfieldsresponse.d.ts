import { SpeakeasyBase } from "../../../internal/utils";
import { FieldSummary } from "./fieldsummary";
/**
 * Success
 */
export declare class ListFieldsResponse extends SpeakeasyBase {
    fields: FieldSummary[];
    nextToken?: string;
}
