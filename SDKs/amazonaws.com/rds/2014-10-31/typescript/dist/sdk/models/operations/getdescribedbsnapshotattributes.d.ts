import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeDBSnapshotAttributesActionEnum {
    DescribeDBSnapshotAttributes = "DescribeDBSnapshotAttributes"
}
export declare enum GETDescribeDBSnapshotAttributesVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETDescribeDBSnapshotAttributesRequest extends SpeakeasyBase {
    action: GETDescribeDBSnapshotAttributesActionEnum;
    /**
     * The identifier for the DB snapshot to describe the attributes for.
     */
    dbSnapshotIdentifier: string;
    version: GETDescribeDBSnapshotAttributesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeDBSnapshotAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
