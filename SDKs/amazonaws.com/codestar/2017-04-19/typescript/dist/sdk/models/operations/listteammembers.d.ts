import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTeamMembersXAmzTargetEnum {
    CodeStar20170419ListTeamMembers = "CodeStar_20170419.ListTeamMembers"
}
export declare class ListTeamMembersRequest extends SpeakeasyBase {
    listTeamMembersRequest: shared.ListTeamMembersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTeamMembersXAmzTargetEnum;
}
export declare class ListTeamMembersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listTeamMembersResult?: shared.ListTeamMembersResult;
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
