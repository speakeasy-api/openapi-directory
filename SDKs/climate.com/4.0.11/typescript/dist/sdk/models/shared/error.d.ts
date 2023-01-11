import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorError extends SpeakeasyBase {
    code: string;
    id: string;
    message: string;
}
export declare class ErrorT extends SpeakeasyBase {
    error?: ErrorError;
}
