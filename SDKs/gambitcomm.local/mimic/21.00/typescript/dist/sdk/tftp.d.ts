import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Tftp {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Show the agent's TFTP argument structure
     *
     * @remarks
     * Agent's TFTP configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolTftpGetArgs(req: operations.ProtocolTftpGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpGetArgsResponse>;
    /**
     * Show the agent's TFTP configuration
     *
     * @remarks
     * Agent's TFTP configuration
     */
    protocolTftpGetConfig(req: operations.ProtocolTftpGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpGetConfigResponse>;
    /**
     * Show the agent's TFTP statistics
     *
     * @remarks
     * Statistics of fields indicated in the headers
     */
    protocolTftpGetStatistics(req: operations.ProtocolTftpGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpGetStatisticsResponse>;
    /**
     * Show the TFTP statistics headers
     *
     * @remarks
     * The headers of statistics fields
     */
    protocolTftpGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolTftpGetStatsHdrResponse>;
    /**
     * Show the agent's TFTP traffic tracing
     *
     * @remarks
     * Trace 1 means enabled, 0 means not
     */
    protocolTftpGetTrace(req: operations.ProtocolTftpGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpGetTraceResponse>;
    /**
     * Show a parameter of a TFTP sesssion
     *
     * @remarks
     * Parameter is server , port , or dstfile
     */
    protocolTftpSessionGetParameter(req: operations.ProtocolTftpSessionGetParameterRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionGetParameterResponse>;
    /**
     * Create a read session to download srcfile from server
     *
     * @remarks
     * Session ID is returned
     */
    protocolTftpSessionRead(req: operations.ProtocolTftpSessionReadRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionReadResponse>;
    /**
     * Set a parameter of a TFTP sesssion
     *
     * @remarks
     * Parameter is server , port , or dstfile
     */
    protocolTftpSessionSetParameter(req: operations.ProtocolTftpSessionSetParameterRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionSetParameterResponse>;
    /**
     * Start a TFTP sesssion
     *
     * @remarks
     * Start uploading or downloading the file
     */
    protocolTftpSessionStart(req: operations.ProtocolTftpSessionStartRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionStartResponse>;
    /**
     * Check a TFTP sesssion's status
     *
     * @remarks
     * Status includes running state, bytes transfered, and time elapsed
     */
    protocolTftpSessionStatus(req: operations.ProtocolTftpSessionStatusRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionStatusResponse>;
    /**
     * Stop a TFTP sesssion
     *
     * @remarks
     * Stop uploading or downloading the file
     */
    protocolTftpSessionStop(req: operations.ProtocolTftpSessionStopRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionStopResponse>;
    /**
     * Create a read session to upload srcfile to server
     *
     * @remarks
     * Session ID is returned
     */
    protocolTftpSessionWrite(req: operations.ProtocolTftpSessionWriteRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionWriteResponse>;
    /**
     * Set the agent's TFTP configuration
     *
     * @remarks
     * Agent's TFTP configuration
     */
    protocolTftpSetConfig(req: operations.ProtocolTftpSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSetConfigResponse>;
    /**
     * Set the agent's TFTP traffic tracing
     *
     * @remarks
     * 1 to enable, 0 to disable
     */
    protocolTftpSetTrace(req: operations.ProtocolTftpSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSetTraceResponse>;
}
