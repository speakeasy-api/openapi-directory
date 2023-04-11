import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETAttributesActionEnum {
    GetAttributes = "GetAttributes"
}
export declare enum GETGETAttributesVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class GETGETAttributesRequest extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: GETGETAttributesActionEnum;
    /**
     * The names of the attributes.
     */
    attributeNames?: string[];
    /**
     * Determines whether or not strong consistency should be enforced when data is read from SimpleDB. If <code>true</code>, any data previously written to SimpleDB will be returned. Otherwise, results will be consistent eventually, and the client may not see data that was written immediately before your read.
     */
    consistentRead?: boolean;
    /**
     * The name of the domain in which to perform the operation.
     */
    domainName: string;
    /**
     * The name of the item.
     */
    itemName: string;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: GETGETAttributesVersionEnum;
}
export declare class GETGETAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
