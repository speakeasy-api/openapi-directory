import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAddPartnerActionEnum {
    AddPartner = "AddPartner"
}
export declare enum GETAddPartnerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETAddPartnerRequest extends SpeakeasyBase {
    /**
     * The Amazon Web Services account ID that owns the cluster.
     */
    accountId: string;
    action: GETAddPartnerActionEnum;
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
    version: GETAddPartnerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAddPartnerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
