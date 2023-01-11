import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListStreamConsumersInput extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    streamARN: string;
    streamCreationTimestamp?: Date;
}
