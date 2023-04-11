import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The EC2 Instance type used for the streaming session.
 */
export declare enum CreateStreamingSessionRequestBodyEc2InstanceTypeEnum {
    G4dnXlarge = "g4dn.xlarge",
    G4dn2xlarge = "g4dn.2xlarge",
    G4dn4xlarge = "g4dn.4xlarge",
    G4dn8xlarge = "g4dn.8xlarge",
    G4dn12xlarge = "g4dn.12xlarge",
    G4dn16xlarge = "g4dn.16xlarge",
    G34xlarge = "g3.4xlarge",
    G3sXlarge = "g3s.xlarge",
    G5Xlarge = "g5.xlarge",
    G52xlarge = "g5.2xlarge",
    G54xlarge = "g5.4xlarge",
    G58xlarge = "g5.8xlarge",
    G516xlarge = "g5.16xlarge"
}
export declare class CreateStreamingSessionRequestBody extends SpeakeasyBase {
    /**
     * The EC2 Instance type used for the streaming session.
     */
    ec2InstanceType?: CreateStreamingSessionRequestBodyEc2InstanceTypeEnum;
    /**
     * The ID of the launch profile used to control access from the streaming session.
     */
    launchProfileId: string;
    /**
     * The user ID of the user that owns the streaming session. The user that owns the session will be logging into the session and interacting with the virtual workstation.
     */
    ownedBy?: string;
    /**
     * The ID of the streaming image.
     */
    streamingImageId?: string;
    /**
     * A collection of labels, in the form of key-value pairs, that apply to this resource.
     */
    tags?: Record<string, string>;
}
export declare class CreateStreamingSessionRequest extends SpeakeasyBase {
    requestBody: CreateStreamingSessionRequestBody;
    xAmzAlgorithm?: string;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don’t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency.
     */
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The studio ID.
     */
    studioId: string;
}
export declare class CreateStreamingSessionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createStreamingSessionResponse?: shared.CreateStreamingSessionResponse;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
