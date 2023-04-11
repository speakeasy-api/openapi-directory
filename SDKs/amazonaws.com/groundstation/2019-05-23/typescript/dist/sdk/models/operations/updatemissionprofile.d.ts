import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * AWS Key Management Service (KMS) Key.
 */
export declare class UpdateMissionProfileRequestBodyStreamsKmsKey extends SpeakeasyBase {
    kmsAliasArn?: string;
    kmsKeyArn?: string;
}
export declare class UpdateMissionProfileRequestBody extends SpeakeasyBase {
    /**
     * Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
     */
    contactPostPassDurationSeconds?: number;
    /**
     * Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
     */
    contactPrePassDurationSeconds?: number;
    /**
     * A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i> <code>Config</code> and a <i>to</i> <code>Config</code>.
     */
    dataflowEdges?: string[][];
    /**
     * Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.
     */
    minimumViableContactDurationSeconds?: number;
    /**
     * Name of a mission profile.
     */
    name?: string;
    /**
     * AWS Key Management Service (KMS) Key.
     */
    streamsKmsKey?: UpdateMissionProfileRequestBodyStreamsKmsKey;
    /**
     * Role to use for encrypting streams with KMS key.
     */
    streamsKmsRole?: string;
    /**
     * ARN of a tracking <code>Config</code>.
     */
    trackingConfigArn?: string;
}
export declare class UpdateMissionProfileRequest extends SpeakeasyBase {
    requestBody: UpdateMissionProfileRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * UUID of a mission profile.
     */
    missionProfileId: string;
}
export declare class UpdateMissionProfileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DependencyException
     */
    dependencyException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    missionProfileIdResponse?: shared.MissionProfileIdResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
