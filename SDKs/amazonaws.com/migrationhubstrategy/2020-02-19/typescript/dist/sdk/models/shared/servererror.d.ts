import { SpeakeasyBase } from "../../../internal/utils";
import { ServerErrorCategoryEnum } from "./servererrorcategoryenum";
/**
 * The error in server analysis.
 */
export declare class ServerError extends SpeakeasyBase {
    serverErrorCategory?: ServerErrorCategoryEnum;
}
