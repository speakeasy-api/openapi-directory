import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTopicByExternalIdRequest extends SpeakeasyBase {
    externalId: string;
}
export declare class GetTopicByExternalIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
