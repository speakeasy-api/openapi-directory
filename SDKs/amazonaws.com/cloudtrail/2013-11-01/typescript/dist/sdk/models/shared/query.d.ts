import { SpeakeasyBase } from "../../../internal/utils";
import { QueryStatusEnum } from "./querystatusenum";
/**
 * A SQL string of criteria about events that you want to collect in an event data store.
 */
export declare class Query extends SpeakeasyBase {
    creationTime?: Date;
    queryId?: string;
    queryStatus?: QueryStatusEnum;
}
