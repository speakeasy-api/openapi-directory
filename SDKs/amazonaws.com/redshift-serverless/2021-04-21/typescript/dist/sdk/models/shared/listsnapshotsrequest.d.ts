import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListSnapshotsRequest extends SpeakeasyBase {
    endTime?: Date;
    maxResults?: number;
    namespaceArn?: string;
    namespaceName?: string;
    nextToken?: string;
    ownerAccount?: string;
    startTime?: Date;
}
