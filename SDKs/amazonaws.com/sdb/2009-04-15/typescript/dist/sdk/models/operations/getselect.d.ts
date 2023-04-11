import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETSelectActionEnum {
    Select = "Select"
}
export declare enum GETSelectVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class GETSelectRequest extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: GETSelectActionEnum;
    /**
     * Determines whether or not strong consistency should be enforced when data is read from SimpleDB. If <code>true</code>, any data previously written to SimpleDB will be returned. Otherwise, results will be consistent eventually, and the client may not see data that was written immediately before your read.
     */
    consistentRead?: boolean;
    /**
     * A string informing Amazon SimpleDB where to start the next list of <code>ItemNames</code>.
     */
    nextToken?: string;
    /**
     * The expression used to query the domain.
     */
    selectExpression: string;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: GETSelectVersionEnum;
}
export declare class GETSelectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
