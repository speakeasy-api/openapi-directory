import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorT extends SpeakeasyBase {
    code: number;
    details?: Record<string, any>;
    href: string;
    message: string;
    statusCode: number;
}
