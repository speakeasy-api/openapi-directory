import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListImportsActionEnum {
    ListImports = "ListImports"
}
export declare enum GETListImportsVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETListImportsRequest extends SpeakeasyBase {
    action: GETListImportsActionEnum;
    /**
     * The name of the exported output value. CloudFormation returns the stack names that are importing this value.
     */
    exportName: string;
    /**
     * A string (provided by the <a>ListImports</a> response output) that identifies the next page of stacks that are importing the specified exported output value.
     */
    nextToken?: string;
    version: GETListImportsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListImportsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
