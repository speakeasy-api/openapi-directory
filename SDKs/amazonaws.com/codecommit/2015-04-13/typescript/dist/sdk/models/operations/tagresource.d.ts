import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TagResourceXAmzTargetEnum {
    CodeCommit20150413TagResource = "CodeCommit_20150413.TagResource"
}
export declare class TagResourceRequest extends SpeakeasyBase {
    tagResourceInput: shared.TagResourceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TagResourceXAmzTargetEnum;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidRepositoryNameException
     */
    invalidRepositoryNameException?: any;
    /**
     * InvalidResourceArnException
     */
    invalidResourceArnException?: any;
    /**
     * InvalidSystemTagUsageException
     */
    invalidSystemTagUsageException?: any;
    /**
     * InvalidTagsMapException
     */
    invalidTagsMapException?: any;
    /**
     * RepositoryDoesNotExistException
     */
    repositoryDoesNotExistException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceArnRequiredException
     */
    resourceArnRequiredException?: any;
    /**
     * TagPolicyException
     */
    tagPolicyException?: any;
    /**
     * TagsMapRequiredException
     */
    tagsMapRequiredException?: any;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}
