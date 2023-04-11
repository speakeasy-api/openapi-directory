import { SpeakeasyBase } from "../../../internal/utils";
import { Content } from "./content";
import { PlayMediaControl } from "./playmediacontrol";
import { QueueInsertPointer } from "./queueinsertpointer";
import { QueuePlayPointer } from "./queueplaypointer";
export declare class Queue extends SpeakeasyBase {
    content: Content[];
    contentItemsCount?: number;
    controls?: Record<string, PlayMediaControl>;
    identifier: string;
    insertPointer?: QueueInsertPointer;
    nextContentUrl?: string;
    playPointer?: QueuePlayPointer;
    prerollSeconds?: number;
    previousContentUrl?: string;
    skipsRemaining?: number;
    version: string;
}
