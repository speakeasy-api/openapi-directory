import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
 */
export declare class CreateConfigRequestBodyConfigData extends SpeakeasyBase {
    antennaDownlinkConfig?: shared.AntennaDownlinkConfig;
    antennaDownlinkDemodDecodeConfig?: shared.AntennaDownlinkDemodDecodeConfig;
    antennaUplinkConfig?: shared.AntennaUplinkConfig;
    dataflowEndpointConfig?: shared.DataflowEndpointConfig;
    s3RecordingConfig?: shared.S3RecordingConfig;
    trackingConfig?: shared.TrackingConfig;
    uplinkEchoConfig?: shared.UplinkEchoConfig;
}
export declare class CreateConfigRequestBody extends SpeakeasyBase {
    /**
     * <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
     */
    configData: CreateConfigRequestBodyConfigData;
    /**
     * Name of a <code>Config</code>.
     */
    name: string;
    /**
     * Tags assigned to a <code>Config</code>.
     */
    tags?: Record<string, string>;
}
export declare class CreateConfigRequest extends SpeakeasyBase {
    requestBody: CreateConfigRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateConfigResponse extends SpeakeasyBase {
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
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
