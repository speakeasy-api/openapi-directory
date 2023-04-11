import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateDistributionWithStagingConfig20200531Request extends SpeakeasyBase {
    /**
     * The identifier of the primary distribution to which you are copying a staging distribution's configuration.
     */
    id: string;
    /**
     * <p>The current versions (<code>ETag</code> values) of both primary and staging distributions. Provide these in the following format:</p> <p> <code>&lt;primary ETag&gt;, &lt;staging ETag&gt;</code> </p>
     */
    ifMatch?: string;
    /**
     * The identifier of the staging distribution whose configuration you are copying to the primary distribution.
     */
    stagingDistributionId?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDistributionWithStagingConfig20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
