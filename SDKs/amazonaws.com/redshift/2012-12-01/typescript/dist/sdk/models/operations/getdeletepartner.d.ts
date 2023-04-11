import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeletePartnerActionEnum {
    DeletePartner = "DeletePartner"
}
export declare enum GETDeletePartnerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETDeletePartnerRequest extends SpeakeasyBase {
    /**
     * The Amazon Web Services account ID that owns the cluster.
     */
    accountId: string;
    action: GETDeletePartnerActionEnum;
    /**
     * The cluster identifier of the cluster that receives data from the partner.
     */
    clusterIdentifier: string;
    /**
     * The name of the database that receives data from the partner.
     */
    databaseName: string;
    /**
     * The name of the partner that is authorized to send data.
     */
    partnerName: string;
    version: GETDeletePartnerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeletePartnerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
