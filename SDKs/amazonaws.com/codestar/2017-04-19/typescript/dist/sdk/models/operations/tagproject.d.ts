import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TagProjectXAmzTargetEnum {
    CodeStar20170419TagProject = "CodeStar_20170419.TagProject"
}
export declare class TagProjectRequest extends SpeakeasyBase {
    tagProjectRequest: shared.TagProjectRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TagProjectXAmzTargetEnum;
}
export declare class TagProjectResponse extends SpeakeasyBase {
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
    tagProjectResult?: shared.TagProjectResult;
    /**
     * ValidationException
     */
    validationException?: any;
}
