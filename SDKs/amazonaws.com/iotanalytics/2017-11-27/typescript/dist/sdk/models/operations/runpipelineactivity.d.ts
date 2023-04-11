import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An activity that performs a transformation on a message.
 */
export declare class RunPipelineActivityRequestBodyPipelineActivity extends SpeakeasyBase {
    addAttributes?: shared.AddAttributesActivity;
    channel?: shared.ChannelActivity;
    datastore?: shared.DatastoreActivity;
    deviceRegistryEnrich?: shared.DeviceRegistryEnrichActivity;
    deviceShadowEnrich?: shared.DeviceShadowEnrichActivity;
    filter?: shared.FilterActivity;
    lambda?: shared.LambdaActivity;
    math?: shared.MathActivity;
    removeAttributes?: shared.RemoveAttributesActivity;
    selectAttributes?: shared.SelectAttributesActivity;
}
export declare class RunPipelineActivityRequestBody extends SpeakeasyBase {
    /**
     * The sample message payloads on which the pipeline activity is run.
     */
    payloads: string[];
    /**
     * An activity that performs a transformation on a message.
     */
    pipelineActivity: RunPipelineActivityRequestBodyPipelineActivity;
}
export declare class RunPipelineActivityRequest extends SpeakeasyBase {
    requestBody: RunPipelineActivityRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RunPipelineActivityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    runPipelineActivityResponse?: shared.RunPipelineActivityResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
