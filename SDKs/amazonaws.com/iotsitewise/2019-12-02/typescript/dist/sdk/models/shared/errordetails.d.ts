import { SpeakeasyBase } from "../../../internal/utils";
import { DetailedError } from "./detailederror";
import { ErrorCodeEnum } from "./errorcodeenum";
/**
 * Contains the details of an IoT SiteWise error.
 */
export declare class ErrorDetails extends SpeakeasyBase {
    code: ErrorCodeEnum;
    details?: DetailedError[];
    message: string;
}
