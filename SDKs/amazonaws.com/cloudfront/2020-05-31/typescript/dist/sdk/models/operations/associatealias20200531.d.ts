import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AssociateAlias20200531Request extends SpeakeasyBase {
    /**
     * The alias (also known as a CNAME) to add to the target distribution.
     */
    alias: string;
    /**
     * The ID of the distribution that you're associating the alias with.
     */
    targetDistributionId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateAlias20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
