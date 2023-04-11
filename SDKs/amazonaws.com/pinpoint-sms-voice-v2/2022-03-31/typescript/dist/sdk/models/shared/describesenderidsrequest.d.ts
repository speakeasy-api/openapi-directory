import { SpeakeasyBase } from "../../../internal/utils";
import { SenderIdAndCountry } from "./senderidandcountry";
import { SenderIdFilter } from "./senderidfilter";
export declare class DescribeSenderIdsRequest extends SpeakeasyBase {
    filters?: SenderIdFilter[];
    maxResults?: number;
    nextToken?: string;
    senderIds?: SenderIdAndCountry[];
}
