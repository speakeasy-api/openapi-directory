import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Type of a <code>Config</code>.
 */
export declare enum GetConfigConfigTypeEnum {
    AntennaDownlink = "antenna-downlink",
    AntennaDownlinkDemodDecode = "antenna-downlink-demod-decode",
    AntennaUplink = "antenna-uplink",
    DataflowEndpoint = "dataflow-endpoint",
    Tracking = "tracking",
    UplinkEcho = "uplink-echo",
    S3Recording = "s3-recording"
}
export declare class GetConfigRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * UUID of a <code>Config</code>.
     */
    configId: string;
    /**
     * Type of a <code>Config</code>.
     */
    configType: GetConfigConfigTypeEnum;
}
export declare class GetConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DependencyException
     */
    dependencyException?: any;
    /**
     * Success
     */
    getConfigResponse?: shared.GetConfigResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
