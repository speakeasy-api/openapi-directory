import { SpeakeasyBase } from "../../../internal/utils";
import { WriteRequest } from "./writerequest";
export declare class BatchWriteItemInput extends SpeakeasyBase {
    requestItems: Record<string, WriteRequest[]>;
}
