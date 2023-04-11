import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UntagResourceXAmzTargetEnum {
    CodeCommit20150413UntagResource = "CodeCommit_20150413.UntagResource"
}
export declare class UntagResourceRequest extends SpeakeasyBase {
    untagResourceInput: shared.UntagResourceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UntagResourceXAmzTargetEnum;
}
export declare class UntagResourceResponse extends SpeakeasyBase {
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
     * InvalidTagKeysListException
     */
    invalidTagKeysListException?: any;
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
     * TagKeysListRequiredException
     */
    tagKeysListRequiredException?: any;
    /**
     * TagPolicyException
     */
    tagPolicyException?: any;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}
