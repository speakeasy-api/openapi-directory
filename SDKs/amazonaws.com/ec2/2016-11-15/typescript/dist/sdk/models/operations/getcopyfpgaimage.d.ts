import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCopyFpgaImageActionEnum {
    CopyFpgaImage = "CopyFpgaImage"
}
export declare enum GETCopyFpgaImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETCopyFpgaImageRequest extends SpeakeasyBase {
    action: GETCopyFpgaImageActionEnum;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">Ensuring idempotency</a>.
     */
    clientToken?: string;
    /**
     * The description for the new AFI.
     */
    description?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The name for the new AFI. The default is the name of the source AFI.
     */
    name?: string;
    /**
     * The ID of the source AFI.
     */
    sourceFpgaImageId: string;
    /**
     * The Region that contains the source AFI.
     */
    sourceRegion: string;
    version: GETCopyFpgaImageVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCopyFpgaImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
