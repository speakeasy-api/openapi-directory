import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeSnapshotAttributeActionEnum {
    DescribeSnapshotAttribute = "DescribeSnapshotAttribute"
}
/**
 * The snapshot attribute you would like to view.
 */
export declare enum GETDescribeSnapshotAttributeAttributeEnum {
    ProductCodes = "productCodes",
    CreateVolumePermission = "createVolumePermission"
}
export declare enum GETDescribeSnapshotAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDescribeSnapshotAttributeRequest extends SpeakeasyBase {
    action: GETDescribeSnapshotAttributeActionEnum;
    /**
     * The snapshot attribute you would like to view.
     */
    attribute: GETDescribeSnapshotAttributeAttributeEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the EBS snapshot.
     */
    snapshotId: string;
    version: GETDescribeSnapshotAttributeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeSnapshotAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
