import { SpeakeasyBase } from "../../../internal/utils";
import { Session } from "./session";
export declare class Event extends SpeakeasyBase {
    appPackageName?: string;
    appTitle?: string;
    appVersionCode?: string;
    attributes?: Record<string, string>;
    clientSdkVersion?: string;
    eventType?: string;
    metrics?: Record<string, number>;
    sdkName?: string;
    session?: Session;
    timestamp?: string;
}
