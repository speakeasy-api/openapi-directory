import { Analytics } from "./analytics";
import { BillingDetails } from "./billingdetails";
import { Credentials } from "./credentials";
import { Experiments } from "./experiments";
import { GamesAdmin } from "./gamesadmin";
import { Manage } from "./manage";
import { Notifications } from "./notifications";
import { PushNotificationTest } from "./pushnotificationtest";
import { Region } from "./region";
import { Scripts } from "./scripts";
import { SegmentQueryFilters } from "./segmentqueryfilters";
import { Snapshots } from "./snapshots";
import { TestHarness } from "./testharness";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["//config2.gamesparks.net"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The API to manage the GameSparks game details
 */
export declare class SDK {
    /**
     * Analytics Restv 2 Controller
     */
    analytics: Analytics;
    /**
     * Billing Details Rest V 2 Controller
     */
    billingDetails: BillingDetails;
    /**
     * Game Credentials Rest V 2 Controller
     */
    credentials: Credentials;
    /**
     * Experiment Rest Controller
     */
    experiments: Experiments;
    /**
     * Games Admin Restv 2 Controller
     */
    gamesAdmin: GamesAdmin;
    /**
     * Manage Restv 2 Controller
     */
    manage: Manage;
    /**
     * Log Summary Restv 2 Controller
     */
    notifications: Notifications;
    /**
     * Push Notification Test Controller
     */
    pushNotificationTest: PushNotificationTest;
    /**
     * Region Restv 2 Controller
     */
    region: Region;
    /**
     * Scripts Restv 2 Controller
     */
    scripts: Scripts;
    /**
     * Segment Query Filter Restv 2 Controller
     */
    segmentQueryFilters: SegmentQueryFilters;
    snapshots: Snapshots;
    /**
     * Test Harness Restv 2 Controller
     */
    testHarness: TestHarness;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
