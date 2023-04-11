import { SpeakeasyBase } from "../../../internal/utils";
import { FieldOption } from "./fieldoption";
/**
 * Success
 */
export declare class ListFieldOptionsResponse extends SpeakeasyBase {
    nextToken?: string;
    options: FieldOption[];
}
