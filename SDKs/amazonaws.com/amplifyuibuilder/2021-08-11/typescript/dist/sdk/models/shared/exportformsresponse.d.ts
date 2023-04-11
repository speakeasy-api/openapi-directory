import { SpeakeasyBase } from "../../../internal/utils";
import { Form } from "./form";
/**
 * Success
 */
export declare class ExportFormsResponse extends SpeakeasyBase {
    entities: Form[];
    nextToken?: string;
}
