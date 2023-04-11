import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The webhook to create. Attach ?noecho to the uri to prevent echo test.
 */
export declare class RechnungsdruckWebAppControllersApiWebHookApiModel extends SpeakeasyBase {
    description?: string;
    filters?: string[];
    headers?: Record<string, string>;
    id?: string;
    isPaused?: boolean;
    properties?: Record<string, Record<string, any>>;
    secret: string;
    webHookUri: string;
}
