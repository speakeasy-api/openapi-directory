import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeMountTargetSecurityGroupsRequest extends SpeakeasyBase {
    /**
     * The ID of the mount target whose security groups you want to retrieve.
     */
    mountTargetId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeMountTargetSecurityGroupsResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    describeMountTargetSecurityGroupsResponse?: shared.DescribeMountTargetSecurityGroupsResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
}
