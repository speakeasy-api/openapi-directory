import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tftp {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * protocolTftpGetArgs - Show the agent's TFTP argument structure
     *
     * Agent's TFTP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolTftpGetArgs(req: operations.ProtocolTftpGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpGetArgsResponse>;
    /**
     * protocolTftpGetConfig - Show the agent's TFTP configuration
     *
     * Agent's TFTP configuration
    **/
    protocolTftpGetConfig(req: operations.ProtocolTftpGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpGetConfigResponse>;
    /**
     * protocolTftpGetStatistics - Show the agent's TFTP statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolTftpGetStatistics(req: operations.ProtocolTftpGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpGetStatisticsResponse>;
    /**
     * protocolTftpGetStatsHdr - Show the TFTP statistics headers
     *
     * The headers of statistics fields
    **/
    protocolTftpGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolTftpGetStatsHdrResponse>;
    /**
     * protocolTftpGetTrace - Show the agent's TFTP traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolTftpGetTrace(req: operations.ProtocolTftpGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpGetTraceResponse>;
    /**
     * protocolTftpSessionGetParameter - Show a parameter of a TFTP sesssion
     *
     * Parameter is server , port , or dstfile
    **/
    protocolTftpSessionGetParameter(req: operations.ProtocolTftpSessionGetParameterRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionGetParameterResponse>;
    /**
     * protocolTftpSessionRead - Create a read session to download srcfile from server
     *
     * Session ID is returned
    **/
    protocolTftpSessionRead(req: operations.ProtocolTftpSessionReadRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionReadResponse>;
    /**
     * protocolTftpSessionSetParameter - Set a parameter of a TFTP sesssion
     *
     * Parameter is server , port , or dstfile
    **/
    protocolTftpSessionSetParameter(req: operations.ProtocolTftpSessionSetParameterRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionSetParameterResponse>;
    /**
     * protocolTftpSessionStart - Start a TFTP sesssion
     *
     * Start uploading or downloading the file
    **/
    protocolTftpSessionStart(req: operations.ProtocolTftpSessionStartRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionStartResponse>;
    /**
     * protocolTftpSessionStatus - Check a TFTP sesssion's status
     *
     * Status includes running state, bytes transfered, and time elapsed
    **/
    protocolTftpSessionStatus(req: operations.ProtocolTftpSessionStatusRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionStatusResponse>;
    /**
     * protocolTftpSessionStop - Stop a TFTP sesssion
     *
     * Stop uploading or downloading the file
    **/
    protocolTftpSessionStop(req: operations.ProtocolTftpSessionStopRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionStopResponse>;
    /**
     * protocolTftpSessionWrite - Create a read session to upload srcfile to server
     *
     * Session ID is returned
    **/
    protocolTftpSessionWrite(req: operations.ProtocolTftpSessionWriteRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSessionWriteResponse>;
    /**
     * protocolTftpSetConfig - Set the agent's TFTP configuration
     *
     * Agent's TFTP configuration
    **/
    protocolTftpSetConfig(req: operations.ProtocolTftpSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSetConfigResponse>;
    /**
     * protocolTftpSetTrace - Set the agent's TFTP traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolTftpSetTrace(req: operations.ProtocolTftpSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTftpSetTraceResponse>;
}
