import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
import { IngestionStatus } from "./ingestionstatus";
import { SourceConfig } from "./sourceconfig";
/**
 * Success
 */
export declare class GetChannelResponse extends SpeakeasyBase {
    channelArn?: string;
    destinations?: Destination[];
    ingestionStatus?: IngestionStatus;
    name?: string;
    source?: string;
    sourceConfig?: SourceConfig;
}
