import { SpeakeasyBase } from "../../../internal/utils";
import { AddObjectInput } from "./addobjectinput";
import { DeleteObjectInput } from "./deleteobjectinput";
/**
 * Defines an object to add to or delete from a governed table.
 */
export declare class WriteOperation extends SpeakeasyBase {
    addObject?: AddObjectInput;
    deleteObject?: DeleteObjectInput;
}
