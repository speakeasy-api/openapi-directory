import { SpeakeasyBase } from "../../../internal/utils";
export declare class ServerError extends SpeakeasyBase {
    message?: string;
    /**
     * You should send us this ID to investigate the issue.
     */
    traceId?: string;
}
