import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * On this day historical events for birth, death and other events.
 *
 * @see {@link http://fungenerators.com/api/facts#number} - Find out more
 */
export declare class OnThisDay {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a random ( famous/ relatively famous ) person born on a given day and month
     */
    getFactOnthisdayBorn(req: operations.GetFactOnthisdayBornRequest, security: operations.GetFactOnthisdayBornSecurity, config?: AxiosRequestConfig): Promise<operations.GetFactOnthisdayBornResponse>;
    /**
     * Returns a random ( famous/ relatively famous ) person died on a given day and month
     */
    getFactOnthisdayDied(req: operations.GetFactOnthisdayDiedRequest, security: operations.GetFactOnthisdayDiedSecurity, config?: AxiosRequestConfig): Promise<operations.GetFactOnthisdayDiedResponse>;
    /**
     * Returns a random ( famous/ relatively famous ) historic event on a given day and month
     */
    getFactOnthisdayEvent(req: operations.GetFactOnthisdayEventRequest, security: operations.GetFactOnthisdayEventSecurity, config?: AxiosRequestConfig): Promise<operations.GetFactOnthisdayEventResponse>;
}
