import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PublishFunction20200531Request extends SpeakeasyBase {
    /**
     * The current version (<code>ETag</code> value) of the function that you are publishing, which you can get using <code>DescribeFunction</code>.
     */
    ifMatch: string;
    /**
     * The name of the function that you are publishing.
     */
    name: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PublishFunction20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
