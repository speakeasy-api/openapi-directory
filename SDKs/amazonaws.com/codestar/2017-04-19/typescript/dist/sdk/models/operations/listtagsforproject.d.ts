import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTagsForProjectXAmzTargetEnum {
    CodeStar20170419ListTagsForProject = "CodeStar_20170419.ListTagsForProject"
}
export declare class ListTagsForProjectRequest extends SpeakeasyBase {
    listTagsForProjectRequest: shared.ListTagsForProjectRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsForProjectXAmzTargetEnum;
}
export declare class ListTagsForProjectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listTagsForProjectResult?: shared.ListTagsForProjectResult;
    /**
     * ProjectNotFoundException
     */
    projectNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
