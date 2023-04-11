import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListVirtualMFADevicesActionEnum {
    ListVirtualMFADevices = "ListVirtualMFADevices"
}
/**
 *  The status (<code>Unassigned</code> or <code>Assigned</code>) of the devices to list. If you do not specify an <code>AssignmentStatus</code>, the operation defaults to <code>Any</code>, which lists both assigned and unassigned virtual MFA devices.,
 */
export declare enum GETListVirtualMFADevicesAssignmentStatusEnum {
    Assigned = "Assigned",
    Unassigned = "Unassigned",
    Any = "Any"
}
export declare enum GETListVirtualMFADevicesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETListVirtualMFADevicesRequest extends SpeakeasyBase {
    action: GETListVirtualMFADevicesActionEnum;
    /**
     *  The status (<code>Unassigned</code> or <code>Assigned</code>) of the devices to list. If you do not specify an <code>AssignmentStatus</code>, the operation defaults to <code>Any</code>, which lists both assigned and unassigned virtual MFA devices.,
     */
    assignmentStatus?: GETListVirtualMFADevicesAssignmentStatusEnum;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
     */
    marker?: string;
    /**
     * <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
     */
    maxItems?: number;
    version: GETListVirtualMFADevicesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListVirtualMFADevicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
