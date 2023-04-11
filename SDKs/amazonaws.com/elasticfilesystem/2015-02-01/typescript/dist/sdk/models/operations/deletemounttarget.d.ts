import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteMountTargetRequest extends SpeakeasyBase {
    /**
     * The ID of the mount target to delete (String).
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
export declare class DeleteMountTargetResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * DependencyTimeout
     */
    dependencyTimeout?: any;
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
