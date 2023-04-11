import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
export declare class DescribeUsersMessage extends SpeakeasyBase {
    engine?: string;
    filters?: Filter[];
    marker?: string;
    maxRecords?: number;
    userId?: string;
}
