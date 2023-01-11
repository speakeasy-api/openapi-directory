import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Commands {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cancelreservation - Use to request a delete an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
    **/
    cancelreservation(req: operations.CancelreservationRequest, config?: AxiosRequestConfig): Promise<operations.CancelreservationResponse>;
    /**
     * getCommands - Get Commands data
    **/
    getCommands(req: operations.GetCommandsRequest, config?: AxiosRequestConfig): Promise<operations.GetCommandsResponse>;
    /**
     * getVariables - Get a charge station's config variables
    **/
    getVariables(req: operations.GetVariablesRequest, config?: AxiosRequestConfig): Promise<operations.GetVariablesResponse>;
    /**
     * patchChargeStationVariable - Update config variables for a chargestation
    **/
    patchChargeStationVariable(req: operations.PatchChargeStationVariableRequest, config?: AxiosRequestConfig): Promise<operations.PatchChargeStationVariableResponse>;
    /**
     * remotestart - Use to request a remote start command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
    **/
    remotestart(req: operations.RemotestartRequest, config?: AxiosRequestConfig): Promise<operations.RemotestartResponse>;
    /**
     * remotestop - Use to request a remote stop command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
    **/
    remotestop(req: operations.RemotestopRequest, config?: AxiosRequestConfig): Promise<operations.RemotestopResponse>;
    /**
     * reserve - Use to request a reserve command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
    **/
    reserve(req: operations.ReserveRequest, config?: AxiosRequestConfig): Promise<operations.ReserveResponse>;
    /**
     * reset - Use to request a reset command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
    **/
    reset(req: operations.ResetRequest, config?: AxiosRequestConfig): Promise<operations.ResetResponse>;
    /**
     * unlockconnector - Use to request an unlock command for a connector. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
    **/
    unlockconnector(req: operations.UnlockconnectorRequest, config?: AxiosRequestConfig): Promise<operations.UnlockconnectorResponse>;
}
