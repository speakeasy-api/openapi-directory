import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Push Notification Test Controller
 */
export declare class PushNotificationTest {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * testPushAmazonNotifications
     */
    testPushAmazonNotificationsUsingPOST(req: operations.TestPushAmazonNotificationsUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.TestPushAmazonNotificationsUsingPOSTResponse>;
    /**
     * testPushAppleDevNotifications
     */
    testPushAppleDevNotificationsUsingPOST(req: operations.TestPushAppleDevNotificationsUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.TestPushAppleDevNotificationsUsingPOSTResponse>;
    /**
     * testPushAppleProdNotifications
     */
    testPushAppleProdNotificationsUsingPOST(req: operations.TestPushAppleProdNotificationsUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.TestPushAppleProdNotificationsUsingPOSTResponse>;
    /**
     * testPushGoogleNotifications
     */
    testPushGoogleNotificationsUsingPOST(req: operations.TestPushGoogleNotificationsUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.TestPushGoogleNotificationsUsingPOSTResponse>;
    /**
     * testViberIntegrationNotifications
     */
    testViberIntegrationNotificationsUsingPOST(req: operations.TestViberIntegrationNotificationsUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.TestViberIntegrationNotificationsUsingPOSTResponse>;
    /**
     * testViberProductionNotifications
     */
    testViberProductionNotificationsUsingPOST(req: operations.TestViberProductionNotificationsUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.TestViberProductionNotificationsUsingPOSTResponse>;
    /**
     * testWindows8Notifications
     */
    testWindows8NotificationsUsingPOST(req: operations.TestWindows8NotificationsUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.TestWindows8NotificationsUsingPOSTResponse>;
    /**
     * testWindowsPhone8Notifications
     */
    testWindowsPhone8NotificationsUsingPOST(req: operations.TestWindowsPhone8NotificationsUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.TestWindowsPhone8NotificationsUsingPOSTResponse>;
}
