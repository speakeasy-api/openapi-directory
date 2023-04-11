import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAssociateDataShareConsumerActionEnum {
    AssociateDataShareConsumer = "AssociateDataShareConsumer"
}
export declare enum GETAssociateDataShareConsumerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETAssociateDataShareConsumerRequest extends SpeakeasyBase {
    action: GETAssociateDataShareConsumerActionEnum;
    /**
     * A value that specifies whether the datashare is associated with the entire account.
     */
    associateEntireAccount?: boolean;
    /**
     * The Amazon Resource Name (ARN) of the consumer that is associated with the datashare.
     */
    consumerArn?: string;
    /**
     * From a datashare consumer account, associates a datashare with all existing and future namespaces in the specified Amazon Web Services Region.
     */
    consumerRegion?: string;
    /**
     * The Amazon Resource Name (ARN) of the datashare that the consumer is to use with the account or the namespace.
     */
    dataShareArn: string;
    version: GETAssociateDataShareConsumerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAssociateDataShareConsumerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
