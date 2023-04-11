import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeMountTargetsRequest extends SpeakeasyBase {
    /**
     * (Optional) The ID of the access point whose mount targets that you want to list. It must be included in your request if a <code>FileSystemId</code> or <code>MountTargetId</code> is not included in your request. Accepts either an access point ID or ARN as input.
     */
    accessPointId?: string;
    /**
     * (Optional) ID of the file system whose mount targets you want to list (String). It must be included in your request if an <code>AccessPointId</code> or <code>MountTargetId</code> is not included. Accepts either a file system ID or ARN as input.
     */
    fileSystemId?: string;
    /**
     * (Optional) Opaque pagination token returned from a previous <code>DescribeMountTargets</code> operation (String). If present, it specifies to continue the list from where the previous returning call left off.
     */
    marker?: string;
    /**
     * (Optional) Maximum number of mount targets to return in the response. Currently, this number is automatically set to 10, and other values are ignored. The response is paginated at 100 per page if you have more than 100 mount targets.
     */
    maxItems?: number;
    /**
     * (Optional) ID of the mount target that you want to have described (String). It must be included in your request if <code>FileSystemId</code> is not included. Accepts either a mount target ID or ARN as input.
     */
    mountTargetId?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeMountTargetsResponse extends SpeakeasyBase {
    /**
     * AccessPointNotFound
     */
    accessPointNotFound?: any;
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    describeMountTargetsResponse?: shared.DescribeMountTargetsResponse;
    /**
     * FileSystemNotFound
     */
    fileSystemNotFound?: any;
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
