import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * This type defines the fields for any warning error messages.
**/
export declare class BaseResponse extends SpeakeasyBase {
    warnings?: ErrorT[];
}
