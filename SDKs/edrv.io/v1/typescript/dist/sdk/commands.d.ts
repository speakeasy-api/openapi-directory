import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Commands {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Use to request a delete an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
     */
    cancelreservation(req: operations.CancelreservationRequestBody, config?: AxiosRequestConfig): Promise<operations.CancelreservationResponse>;
    /**
     * Get Commands data
     */
    getCommands(req: operations.GetCommandsRequest, config?: AxiosRequestConfig): Promise<operations.GetCommandsResponse>;
    /**
     * Get a charge station's config variables
     */
    getVariables(req: operations.GetVariablesRequest, config?: AxiosRequestConfig): Promise<operations.GetVariablesResponse>;
    /**
     * Update config variables for a chargestation
     */
    patchChargeStationVariable(req: operations.PatchChargeStationVariableRequest, config?: AxiosRequestConfig): Promise<operations.PatchChargeStationVariableResponse>;
    /**
     * Use to request a remote start command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
     */
    remotestart(req: operations.RemotestartRequestBody, config?: AxiosRequestConfig): Promise<operations.RemotestartResponse>;
    /**
     * Use to request a remote stop command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
     */
    remotestop(req: operations.RemotestopRequestBody, config?: AxiosRequestConfig): Promise<operations.RemotestopResponse>;
    /**
     * Use to request a reserve command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
     */
    reserve(req: operations.ReserveRequestBody, config?: AxiosRequestConfig): Promise<operations.ReserveResponse>;
    /**
     * Use to request a reset command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
     */
    reset(req: operations.ResetRequestBody, config?: AxiosRequestConfig): Promise<operations.ResetResponse>;
    /**
     * Use to request an unlock command for a connector. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
     */
    unlockconnector(req: operations.UnlockconnectorRequestBody, config?: AxiosRequestConfig): Promise<operations.UnlockconnectorResponse>;
}
