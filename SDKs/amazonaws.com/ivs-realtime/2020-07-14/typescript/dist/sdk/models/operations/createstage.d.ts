import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateStageRequestBody extends SpeakeasyBase {
    /**
     * Optional name that can be specified for the stage being created.
     */
    name?: string;
    /**
     * Array of participant token configuration objects to attach to the new stage.
     */
    participantTokenConfigurations?: shared.ParticipantTokenConfiguration[];
    /**
     * Tags attached to the resource. Array of maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
     */
    tags?: Record<string, string>;
}
export declare class CreateStageRequest extends SpeakeasyBase {
    requestBody: CreateStageRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateStageResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createStageResponse?: shared.CreateStageResponse;
    /**
     * PendingVerification
     */
    pendingVerification?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
