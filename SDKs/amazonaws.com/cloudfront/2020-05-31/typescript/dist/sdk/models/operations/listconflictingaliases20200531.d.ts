import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListConflictingAliases20200531Request extends SpeakeasyBase {
    /**
     * The alias (also called a CNAME) to search for conflicting aliases.
     */
    alias: string;
    /**
     * The ID of a distribution in your account that has an attached SSL/TLS certificate that includes the provided alias.
     */
    distributionId: string;
    /**
     * Use this field when paginating results to indicate where to begin in the list of conflicting aliases. The response includes conflicting aliases in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
     */
    marker?: string;
    /**
     * The maximum number of conflicting aliases that you want in the response.
     */
    maxItems?: number;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListConflictingAliases20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
