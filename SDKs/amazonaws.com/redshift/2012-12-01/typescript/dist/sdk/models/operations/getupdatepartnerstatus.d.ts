import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUpdatePartnerStatusActionEnum {
    UpdatePartnerStatus = "UpdatePartnerStatus"
}
/**
 * The value of the updated status.
 */
export declare enum GETUpdatePartnerStatusStatusEnum {
    Active = "Active",
    Inactive = "Inactive",
    RuntimeFailure = "RuntimeFailure",
    ConnectionFailure = "ConnectionFailure"
}
export declare enum GETUpdatePartnerStatusVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETUpdatePartnerStatusRequest extends SpeakeasyBase {
    /**
     * The Amazon Web Services account ID that owns the cluster.
     */
    accountId: string;
    action: GETUpdatePartnerStatusActionEnum;
    /**
     * The cluster identifier of the cluster whose partner integration status is being updated.
     */
    clusterIdentifier: string;
    /**
     * The name of the database whose partner integration status is being updated.
     */
    databaseName: string;
    /**
     * The name of the partner whose integration status is being updated.
     */
    partnerName: string;
    /**
     * The value of the updated status.
     */
    status: GETUpdatePartnerStatusStatusEnum;
    /**
     * The status message provided by the partner.
     */
    statusMessage?: string;
    version: GETUpdatePartnerStatusVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUpdatePartnerStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
