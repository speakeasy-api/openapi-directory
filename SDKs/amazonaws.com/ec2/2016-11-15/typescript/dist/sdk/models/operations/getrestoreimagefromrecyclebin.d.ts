import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRestoreImageFromRecycleBinActionEnum {
    RestoreImageFromRecycleBin = "RestoreImageFromRecycleBin"
}
export declare enum GETRestoreImageFromRecycleBinVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETRestoreImageFromRecycleBinRequest extends SpeakeasyBase {
    action: GETRestoreImageFromRecycleBinActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the AMI to restore.
     */
    imageId: string;
    version: GETRestoreImageFromRecycleBinVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRestoreImageFromRecycleBinResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
