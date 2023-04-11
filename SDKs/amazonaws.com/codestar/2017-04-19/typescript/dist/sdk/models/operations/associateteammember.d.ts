import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateTeamMemberXAmzTargetEnum {
    CodeStar20170419AssociateTeamMember = "CodeStar_20170419.AssociateTeamMember"
}
export declare class AssociateTeamMemberRequest extends SpeakeasyBase {
    associateTeamMemberRequest: shared.AssociateTeamMemberRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateTeamMemberXAmzTargetEnum;
}
export declare class AssociateTeamMemberResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateTeamMemberResult?: shared.AssociateTeamMemberResult;
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
     * TeamMemberAlreadyAssociatedException
     */
    teamMemberAlreadyAssociatedException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
