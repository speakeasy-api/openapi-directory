import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDisassociateDataShareConsumerActionEnum {
    DisassociateDataShareConsumer = "DisassociateDataShareConsumer"
}
export declare enum GETDisassociateDataShareConsumerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETDisassociateDataShareConsumerRequest extends SpeakeasyBase {
    action: GETDisassociateDataShareConsumerActionEnum;
    /**
     * The Amazon Resource Name (ARN) of the consumer that association for the datashare is removed from.
     */
    consumerArn?: string;
    /**
     * From a datashare consumer account, removes association of a datashare from all the existing and future namespaces in the specified Amazon Web Services Region.
     */
    consumerRegion?: string;
    /**
     * The Amazon Resource Name (ARN) of the datashare to remove association for.
     */
    dataShareArn: string;
    /**
     * A value that specifies whether association for the datashare is removed from the entire account.
     */
    disassociateEntireAccount?: boolean;
    version: GETDisassociateDataShareConsumerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDisassociateDataShareConsumerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
