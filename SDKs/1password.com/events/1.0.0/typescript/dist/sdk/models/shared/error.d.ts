import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorError extends SpeakeasyBase {
    message?: string;
}
export declare class ErrorT extends SpeakeasyBase {
    error?: ErrorError;
}
