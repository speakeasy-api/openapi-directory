import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CopyDistribution20200531RequestBody extends SpeakeasyBase {
    /**
     * A value that uniquely identifies a request to create a resource. This helps to prevent CloudFront from creating a duplicate resource if you accidentally resubmit an identical request.
     */
    callerReference: string;
}
export declare class CopyDistribution20200531Request extends SpeakeasyBase {
    /**
     * The version identifier of the primary distribution whose configuration you are copying. This is the <code>ETag</code> value returned in the response to <code>GetDistribution</code> and <code>GetDistributionConfig</code>.
     */
    ifMatch?: string;
    /**
     * The identifier of the primary distribution whose configuration you are copying. To get a distribution ID, use <code>ListDistributions</code>.
     */
    primaryDistributionId: string;
    requestBody: Uint8Array;
    /**
     * The type of distribution that your primary distribution will be copied to. The only valid value is <code>True</code>, indicating that you are copying to a staging distribution.
     */
    staging?: boolean;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CopyDistribution20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
