import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
 */
export declare class UpdateConfigRequestBodyConfigData extends SpeakeasyBase {
    antennaDownlinkConfig?: shared.AntennaDownlinkConfig;
    antennaDownlinkDemodDecodeConfig?: shared.AntennaDownlinkDemodDecodeConfig;
    antennaUplinkConfig?: shared.AntennaUplinkConfig;
    dataflowEndpointConfig?: shared.DataflowEndpointConfig;
    s3RecordingConfig?: shared.S3RecordingConfig;
    trackingConfig?: shared.TrackingConfig;
    uplinkEchoConfig?: shared.UplinkEchoConfig;
}
export declare class UpdateConfigRequestBody extends SpeakeasyBase {
    /**
     * <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
     */
    configData: UpdateConfigRequestBodyConfigData;
    /**
     * Name of a <code>Config</code>.
     */
    name: string;
}
/**
 * Type of a <code>Config</code>.
 */
export declare enum UpdateConfigConfigTypeEnum {
    AntennaDownlink = "antenna-downlink",
    AntennaDownlinkDemodDecode = "antenna-downlink-demod-decode",
    AntennaUplink = "antenna-uplink",
    DataflowEndpoint = "dataflow-endpoint",
    Tracking = "tracking",
    UplinkEcho = "uplink-echo",
    S3Recording = "s3-recording"
}
export declare class UpdateConfigRequest extends SpeakeasyBase {
    requestBody: UpdateConfigRequestBody;
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
    configType: UpdateConfigConfigTypeEnum;
}
export declare class UpdateConfigResponse extends SpeakeasyBase {
    /**
     * Success
     */
    configIdResponse?: shared.ConfigIdResponse;
    contentType: string;
    /**
     * DependencyException
     */
    dependencyException?: any;
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
