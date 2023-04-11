import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETResetSnapshotAttributeActionEnum {
    ResetSnapshotAttribute = "ResetSnapshotAttribute"
}
/**
 * The attribute to reset. Currently, only the attribute for permission to create volumes can be reset.
 */
export declare enum GETResetSnapshotAttributeAttributeEnum {
    ProductCodes = "productCodes",
    CreateVolumePermission = "createVolumePermission"
}
export declare enum GETResetSnapshotAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETResetSnapshotAttributeRequest extends SpeakeasyBase {
    action: GETResetSnapshotAttributeActionEnum;
    /**
     * The attribute to reset. Currently, only the attribute for permission to create volumes can be reset.
     */
    attribute: GETResetSnapshotAttributeAttributeEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the snapshot.
     */
    snapshotId: string;
    version: GETResetSnapshotAttributeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETResetSnapshotAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
