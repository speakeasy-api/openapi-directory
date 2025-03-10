import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListFieldLevelEncryptionConfigs20190326Request extends SpeakeasyBase {
    /**
     * Use this when paginating results to indicate where to begin in your list of configurations. The results include configurations in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last configuration on that page).
     */
    marker?: string;
    /**
     * The maximum number of field-level encryption configurations you want in the response body.
     */
    maxItems?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFieldLevelEncryptionConfigs20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
