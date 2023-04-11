import { SpeakeasyBase } from "../../../internal/utils";
import { QueryStatusEnum } from "./querystatusenum";
/**
 * Success
 */
export declare class CancelQueryResponse extends SpeakeasyBase {
    queryId: string;
    queryStatus: QueryStatusEnum;
}
