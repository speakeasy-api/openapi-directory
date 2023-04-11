import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AssociateRoleToGroupRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the role you wish to associate with this group. The existence of the role is not validated.
     */
    roleArn: string;
}
export declare class AssociateRoleToGroupRequest extends SpeakeasyBase {
    /**
     * The ID of the Greengrass group.
     */
    groupId: string;
    requestBody: AssociateRoleToGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateRoleToGroupResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateRoleToGroupResponse?: shared.AssociateRoleToGroupResponse;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
