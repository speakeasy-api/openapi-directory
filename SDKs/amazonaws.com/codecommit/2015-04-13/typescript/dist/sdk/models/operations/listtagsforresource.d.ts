import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTagsForResourceXAmzTargetEnum {
    CodeCommit20150413ListTagsForResource = "CodeCommit_20150413.ListTagsForResource"
}
export declare class ListTagsForResourceRequest extends SpeakeasyBase {
    listTagsForResourceInput: shared.ListTagsForResourceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsForResourceXAmzTargetEnum;
}
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
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
     * Success
     */
    listTagsForResourceOutput?: shared.ListTagsForResourceOutput;
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
}
