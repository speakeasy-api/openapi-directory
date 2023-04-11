import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://data.iotevents.{region}.amazonaws.com", "https://data.iotevents.{region}.amazonaws.com", "http://data.iotevents.{region}.amazonaws.com.cn", "https://data.iotevents.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * <p>IoT Events monitors your equipment or device fleets for failures or changes in operation, and triggers actions when such events occur. You can use IoT Events Data API commands to send inputs to detectors, list detectors, and view or update a detector's status.</p> <p> For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/what-is-iotevents.html">What is IoT Events?</a> in the <i>IoT Events Developer Guide</i>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/iotevents/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state after you acknowledge them.
     */
    batchAcknowledgeAlarm(req: operations.BatchAcknowledgeAlarmRequest, config?: AxiosRequestConfig): Promise<operations.BatchAcknowledgeAlarmResponse>;
    /**
     * Deletes one or more detectors that were created. When a detector is deleted, its state will be cleared and the detector will be removed from the list of detectors. The deleted detector will no longer appear if referenced in the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html">ListDetectors</a> API call.
     */
    batchDeleteDetector(req: operations.BatchDeleteDetectorRequest, config?: AxiosRequestConfig): Promise<operations.BatchDeleteDetectorResponse>;
    /**
     * Disables one or more alarms. The alarms change to the <code>DISABLED</code> state after you disable them.
     */
    batchDisableAlarm(req: operations.BatchDisableAlarmRequest, config?: AxiosRequestConfig): Promise<operations.BatchDisableAlarmResponse>;
    /**
     * Enables one or more alarms. The alarms change to the <code>NORMAL</code> state after you enable them.
     */
    batchEnableAlarm(req: operations.BatchEnableAlarmRequest, config?: AxiosRequestConfig): Promise<operations.BatchEnableAlarmResponse>;
    /**
     * Sends a set of messages to the IoT Events system. Each message payload is transformed into the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor that input. If multiple messages are sent, the order in which the messages are processed isn't guaranteed. To guarantee ordering, you must send messages one at a time and wait for a successful response.
     */
    batchPutMessage(req: operations.BatchPutMessageRequest, config?: AxiosRequestConfig): Promise<operations.BatchPutMessageResponse>;
    /**
     * Resets one or more alarms. The alarms return to the <code>NORMAL</code> state after you reset them.
     */
    batchResetAlarm(req: operations.BatchResetAlarmRequest, config?: AxiosRequestConfig): Promise<operations.BatchResetAlarmResponse>;
    /**
     * Changes one or more alarms to the snooze mode. The alarms change to the <code>SNOOZE_DISABLED</code> state after you set them to the snooze mode.
     */
    batchSnoozeAlarm(req: operations.BatchSnoozeAlarmRequest, config?: AxiosRequestConfig): Promise<operations.BatchSnoozeAlarmResponse>;
    /**
     * Updates the state, variable values, and timer settings of one or more detectors (instances) of a specified detector model.
     */
    batchUpdateDetector(req: operations.BatchUpdateDetectorRequest, config?: AxiosRequestConfig): Promise<operations.BatchUpdateDetectorResponse>;
    /**
     * Retrieves information about an alarm.
     */
    describeAlarm(req: operations.DescribeAlarmRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAlarmResponse>;
    /**
     * Returns information about the specified detector (instance).
     */
    describeDetector(req: operations.DescribeDetectorRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDetectorResponse>;
    /**
     * Lists one or more alarms. The operation returns only the metadata associated with each alarm.
     */
    listAlarms(req: operations.ListAlarmsRequest, config?: AxiosRequestConfig): Promise<operations.ListAlarmsResponse>;
    /**
     * Lists detectors (the instances of a detector model).
     */
    listDetectors(req: operations.ListDetectorsRequest, config?: AxiosRequestConfig): Promise<operations.ListDetectorsResponse>;
}
