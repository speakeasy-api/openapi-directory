import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETSwapEnvironmentCNAMEsActionEnum {
    SwapEnvironmentCNAMEs = "SwapEnvironmentCNAMEs"
}
export declare enum GETSwapEnvironmentCNAMEsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETSwapEnvironmentCNAMEsRequest extends SpeakeasyBase {
    action: GETSwapEnvironmentCNAMEsActionEnum;
    /**
     * <p>The ID of the destination environment.</p> <p> Condition: You must specify at least the <code>DestinationEnvironmentID</code> or the <code>DestinationEnvironmentName</code>. You may also specify both. You must specify the <code>SourceEnvironmentId</code> with the <code>DestinationEnvironmentId</code>. </p>
     */
    destinationEnvironmentId?: string;
    /**
     * <p>The name of the destination environment.</p> <p> Condition: You must specify at least the <code>DestinationEnvironmentID</code> or the <code>DestinationEnvironmentName</code>. You may also specify both. You must specify the <code>SourceEnvironmentName</code> with the <code>DestinationEnvironmentName</code>. </p>
     */
    destinationEnvironmentName?: string;
    /**
     * <p>The ID of the source environment.</p> <p> Condition: You must specify at least the <code>SourceEnvironmentID</code> or the <code>SourceEnvironmentName</code>. You may also specify both. If you specify the <code>SourceEnvironmentId</code>, you must specify the <code>DestinationEnvironmentId</code>. </p>
     */
    sourceEnvironmentId?: string;
    /**
     * <p>The name of the source environment.</p> <p> Condition: You must specify at least the <code>SourceEnvironmentID</code> or the <code>SourceEnvironmentName</code>. You may also specify both. If you specify the <code>SourceEnvironmentName</code>, you must specify the <code>DestinationEnvironmentName</code>. </p>
     */
    sourceEnvironmentName?: string;
    version: GETSwapEnvironmentCNAMEsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETSwapEnvironmentCNAMEsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
