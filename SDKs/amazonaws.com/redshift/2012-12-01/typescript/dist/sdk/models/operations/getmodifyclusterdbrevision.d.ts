import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyClusterDbRevisionActionEnum {
    ModifyClusterDbRevision = "ModifyClusterDbRevision"
}
export declare enum GETModifyClusterDbRevisionVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETModifyClusterDbRevisionRequest extends SpeakeasyBase {
    action: GETModifyClusterDbRevisionActionEnum;
    /**
     * <p>The unique identifier of a cluster whose database revision you want to modify. </p> <p>Example: <code>examplecluster</code> </p>
     */
    clusterIdentifier: string;
    /**
     * The identifier of the database revision. You can retrieve this value from the response to the <a>DescribeClusterDbRevisions</a> request.
     */
    revisionTarget: string;
    version: GETModifyClusterDbRevisionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyClusterDbRevisionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
