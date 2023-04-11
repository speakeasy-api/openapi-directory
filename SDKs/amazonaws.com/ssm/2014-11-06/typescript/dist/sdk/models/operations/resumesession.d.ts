import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ResumeSessionXAmzTargetEnum {
    AmazonSSMResumeSession = "AmazonSSM.ResumeSession"
}
export declare class ResumeSessionRequest extends SpeakeasyBase {
    resumeSessionRequest: shared.ResumeSessionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResumeSessionXAmzTargetEnum;
}
export declare class ResumeSessionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DoesNotExistException
     */
    doesNotExistException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    resumeSessionResponse?: shared.ResumeSessionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
