import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeFpgaImageAttributeActionEnum {
    DescribeFpgaImageAttribute = "DescribeFpgaImageAttribute"
}
/**
 * The AFI attribute.
 */
export declare enum GETDescribeFpgaImageAttributeAttributeEnum {
    Description = "description",
    Name = "name",
    LoadPermission = "loadPermission",
    ProductCodes = "productCodes"
}
export declare enum GETDescribeFpgaImageAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDescribeFpgaImageAttributeRequest extends SpeakeasyBase {
    action: GETDescribeFpgaImageAttributeActionEnum;
    /**
     * The AFI attribute.
     */
    attribute: GETDescribeFpgaImageAttributeAttributeEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the AFI.
     */
    fpgaImageId: string;
    version: GETDescribeFpgaImageAttributeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeFpgaImageAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
