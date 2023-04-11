import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDeliveryStreamsXAmzTargetEnum {
    Firehose20150804ListDeliveryStreams = "Firehose_20150804.ListDeliveryStreams"
}
export declare class ListDeliveryStreamsRequest extends SpeakeasyBase {
    listDeliveryStreamsInput: shared.ListDeliveryStreamsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDeliveryStreamsXAmzTargetEnum;
}
export declare class ListDeliveryStreamsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listDeliveryStreamsOutput?: shared.ListDeliveryStreamsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
