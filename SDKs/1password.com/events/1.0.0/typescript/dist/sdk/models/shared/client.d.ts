import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata gathered about the client
 */
export declare class Client extends SpeakeasyBase {
    appName?: string;
    appVersion?: string;
    ipAddress?: string;
    osName?: string;
    osVersion?: string;
    platformName?: string;
    /**
     * Depending on the platform used, this can be the version of the browser that the client extension is installed, the model of computer that the native application is installed or the machine's CPU version that the CLI was installed
     */
    platformVersion?: string;
}
