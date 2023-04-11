import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribePartnersActionEnum {
    DescribePartners = "DescribePartners"
}
export declare enum GETDescribePartnersVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETDescribePartnersRequest extends SpeakeasyBase {
    /**
     * The Amazon Web Services account ID that owns the cluster.
     */
    accountId: string;
    action: GETDescribePartnersActionEnum;
    /**
     * The cluster identifier of the cluster whose partner integration is being described.
     */
    clusterIdentifier: string;
    /**
     * The name of the database whose partner integration is being described. If database name is not specified, then all databases in the cluster are described.
     */
    databaseName?: string;
    /**
     * The name of the partner that is being described. If partner name is not specified, then all partner integrations are described.
     */
    partnerName?: string;
    version: GETDescribePartnersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribePartnersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
