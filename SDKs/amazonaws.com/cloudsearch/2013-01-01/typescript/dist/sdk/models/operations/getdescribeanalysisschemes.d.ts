import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeAnalysisSchemesActionEnum {
    DescribeAnalysisSchemes = "DescribeAnalysisSchemes"
}
export declare enum GETDescribeAnalysisSchemesVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GETDescribeAnalysisSchemesRequest extends SpeakeasyBase {
    action: GETDescribeAnalysisSchemesActionEnum;
    /**
     * The analysis schemes you want to describe.
     */
    analysisSchemeNames?: string[];
    /**
     * Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.
     */
    deployed?: boolean;
    /**
     * The name of the domain you want to describe.
     */
    domainName: string;
    version: GETDescribeAnalysisSchemesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeAnalysisSchemesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
