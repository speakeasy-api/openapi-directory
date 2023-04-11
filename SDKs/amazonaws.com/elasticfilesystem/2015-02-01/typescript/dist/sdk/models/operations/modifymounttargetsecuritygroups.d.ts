import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ModifyMountTargetSecurityGroupsRequestBody extends SpeakeasyBase {
    /**
     * An array of up to five VPC security group IDs.
     */
    securityGroups?: string[];
}
export declare class ModifyMountTargetSecurityGroupsRequest extends SpeakeasyBase {
    /**
     * The ID of the mount target whose security groups you want to modify.
     */
    mountTargetId: string;
    requestBody: ModifyMountTargetSecurityGroupsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ModifyMountTargetSecurityGroupsResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * IncorrectMountTargetState
     */
    incorrectMountTargetState?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * MountTargetNotFound
     */
    mountTargetNotFound?: any;
    /**
     * SecurityGroupLimitExceeded
     */
    securityGroupLimitExceeded?: any;
    /**
     * SecurityGroupNotFound
     */
    securityGroupNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
