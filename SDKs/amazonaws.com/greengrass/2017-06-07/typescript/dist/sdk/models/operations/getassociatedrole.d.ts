import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAssociatedRoleRequest extends SpeakeasyBase {
    /**
     * The ID of the Greengrass group.
     */
    groupId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssociatedRoleResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    getAssociatedRoleResponse?: shared.GetAssociatedRoleResponse;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
