import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateTeamMemberXAmzTargetEnum {
    CodeStar20170419DisassociateTeamMember = "CodeStar_20170419.DisassociateTeamMember"
}
export declare class DisassociateTeamMemberRequest extends SpeakeasyBase {
    disassociateTeamMemberRequest: shared.DisassociateTeamMemberRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateTeamMemberXAmzTargetEnum;
}
export declare class DisassociateTeamMemberResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    disassociateTeamMemberResult?: Record<string, any>;
    /**
     * InvalidServiceRoleException
     */
    invalidServiceRoleException?: any;
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
