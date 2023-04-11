import { SpeakeasyBase } from "../../../internal/utils";
import { FieldError } from "./fielderror";
import { GetFieldResponse } from "./getfieldresponse";
/**
 * Success
 */
export declare class BatchGetFieldResponse extends SpeakeasyBase {
    errors: FieldError[];
    fields: GetFieldResponse[];
}
