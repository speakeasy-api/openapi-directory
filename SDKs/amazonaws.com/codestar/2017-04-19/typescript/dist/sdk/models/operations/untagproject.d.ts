import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UntagProjectXAmzTargetEnum {
    CodeStar20170419UntagProject = "CodeStar_20170419.UntagProject"
}
export declare class UntagProjectRequest extends SpeakeasyBase {
    untagProjectRequest: shared.UntagProjectRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UntagProjectXAmzTargetEnum;
}
export declare class UntagProjectResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ProjectNotFoundException
     */
    projectNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    untagProjectResult?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
