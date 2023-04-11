import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateTeamMemberXAmzTargetEnum {
    CodeStar20170419UpdateTeamMember = "CodeStar_20170419.UpdateTeamMember"
}
export declare class UpdateTeamMemberRequest extends SpeakeasyBase {
    updateTeamMemberRequest: shared.UpdateTeamMemberRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTeamMemberXAmzTargetEnum;
}
export declare class UpdateTeamMemberResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InvalidServiceRoleException
     */
    invalidServiceRoleException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ProjectConfigurationException
     */
    projectConfigurationException?: any;
    /**
     * ProjectNotFoundException
     */
    projectNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TeamMemberNotFoundException
     */
    teamMemberNotFoundException?: any;
    /**
     * Success
     */
    updateTeamMemberResult?: shared.UpdateTeamMemberResult;
    /**
     * ValidationException
     */
    validationException?: any;
}
